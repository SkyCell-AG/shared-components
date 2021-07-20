import {
    renderHook,
} from '@testing-library/react-hooks'
import {
    queryWrapper,
} from './utils'
import useQueryGetUserContacts from '../useQueryGetUserContacts'

const token = 'jwt-token'

jest.mock('@skycell-ag/auth', () => {
    return {
        useJWTToken: () => { return token },
        useAuth: () => {
            return {
                user: {
                    email: 'test@email.com',
                },
            }
        },
    }
})

jest.mock('services/requestBusinessObjects', () => {
    return jest.fn()
})

test('should use useQueryGetUserContacts', async () => {
    const {
        result,
        waitFor,
    } = renderHook(() => {
        return useQueryGetUserContacts(() => {
            return Promise.resolve({
                data: 'test',
            })
        })
    }, {
        wrapper: queryWrapper,
    })

    await waitFor(() => { return result.current.isSuccess })

    expect(result.current.data).toEqual({
        data: 'test',
    })
})
