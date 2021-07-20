import {
    renderHook,
} from '@testing-library/react-hooks'
import requestBusinessObjects from 'services/requestBusinessObjects'
import {
    queryWrapper,
    requestBusinessObjectsEmptyMock,
} from './utils'
import useContacts from '../useContacts'

const token = 'jwt-token'

jest.mock('@skycell-ag/auth', () => {
    return {
        useJWTToken: () => { return token },
    }
})

jest.mock('services/requestBusinessObjects', () => {
    return jest.fn()
})

test('should use useContacts', async () => {
    requestBusinessObjectsEmptyMock()
    const {
        result,
        waitFor,
    } = renderHook(() => {
        return useContacts([
            'christian.wegmann@skycell.ch',
            'julia.miklevska@skycell.ch',
        ])
    }, {
        wrapper: queryWrapper,
    })

    await waitFor(() => { return result.current.isSuccess })

    expect(result.current.data).toEqual([])
    expect(requestBusinessObjects).toBeCalledTimes(1)
    expect(requestBusinessObjects).toBeCalledWith({
        method: 'POST',
        url: 'contact/filter',
        data: {
            includeFilters: {
                email: [
                    'christian.wegmann@skycell.ch',
                    'julia.miklevska@skycell.ch',
                ],
            },
            start: 0,
            rows: 50,
        },
        token,
    })
})
