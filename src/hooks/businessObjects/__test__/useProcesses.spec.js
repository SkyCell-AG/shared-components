import {
    renderHook,
} from '@testing-library/react-hooks'
import {
    queryWrapper,
} from './utils'
import useProcesses from '../useProcesses'
import getProcesses from '../queries/getProcesses'

const token = 'jwt-token'

jest.mock('@skycell-ag/auth', () => {
    return {
        useJWTToken: () => { return token },
    }
})

jest.mock('hooks/businessObjects/queries/getProcesses', () => {
    return jest.fn()
})

describe('useProcesses', () => {
    test('should return correct processes if addressId is passed', async () => {
        const addressId = 123

        getProcesses.mockImplementationOnce(() => {
            return Promise.resolve([
                {
                    process: 'SENDING',
                },
                {
                    process: 'RECIEVING',
                },
            ])
        })

        const {
            result,
            waitFor,
        } = renderHook(() => {
            return useProcesses(addressId)
        },
        {
            wrapper: queryWrapper,
        })

        await waitFor(() => { return result.current.isSuccess })
        expect(result.current.data).toEqual([
            {
                process: 'SENDING',
            },
            {
                process: 'RECIEVING',
            },
        ])
    })
})
