import {
    renderHook,
} from '@testing-library/react-hooks'
import {
    queryWrapper,
} from './utils'

import useAttachment from '../useAttachment'
import getAttachment from '../queries/getAttachment'

const token = 'jwt-token'

jest.mock('@skycell-ag/auth', () => {
    return {
        useJWTToken: () => { return token },
    }
})

jest.mock('hooks/businessObjects/queries/getAttachment', () => {
    return jest.fn()
})

describe('useAttachment', () => {
    test('should return correct data when getting attachment', async () => {
        const data = {
            id: 1,
        }

        getAttachment.mockImplementationOnce(() => {
            return Promise.resolve(data)
        })

        const {
            result,
            waitFor,
        } = renderHook(() => {
            return useAttachment({})
        },
        {
            wrapper: queryWrapper,
        })

        await waitFor(() => { return result.current.isSuccess })
        expect(result.current.data).toEqual(data)
    })
})
