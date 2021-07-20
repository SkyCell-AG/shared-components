import {
    renderHook,
} from '@testing-library/react-hooks'
import {
    queryWrapper,
} from './utils'
import getContacts from '../getContacts'
import useUserAddresses from '../useUserAddresses'

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

jest.mock('hooks/businessObjects/getContacts', () => {
    return jest.fn()
})

jest.mock('services/requestBusinessObjects', () => {
    return jest.fn()
})

describe('useUserAddresses', () => {
    test('should return correct data when user have contacts with addresses', async () => {
        getContacts.mockImplementationOnce(() => {
            return Promise.resolve([
                {
                    address: 'test address 1',
                },
                {
                    address: 'test address 2',
                },
            ])
        })

        const {
            result,
            waitFor,
        } = renderHook(() => {
            return useUserAddresses()
        },
        {
            wrapper: queryWrapper,
        })

        await waitFor(() => { return result.current.isSuccess })
        expect(result.current.data).toEqual([
            'test address 1',
            'test address 2',
        ])
    })

    test('should return correct data when user not have contacts', async () => {
        getContacts.mockImplementationOnce(() => {
            return Promise.resolve([])
        })

        const {
            result,
            waitFor,
        } = renderHook(() => {
            return useUserAddresses()
        },
        {
            wrapper: queryWrapper,
        })

        await waitFor(() => { return result.current.isSuccess })
        expect(result.current.data).toEqual([])
    })
})
