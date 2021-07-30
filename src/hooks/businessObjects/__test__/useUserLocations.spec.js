import {
    renderHook,
} from '@testing-library/react-hooks'
import {
    queryWrapper,
} from './utils'
import getContacts from '../getContacts'
import useUserLocations from '../useUserLocations'

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

describe('useUserLocations', () => {
    test('should return correct data when user have contacts with location', async () => {
        getContacts.mockImplementationOnce(() => {
            return Promise.resolve([
                {
                    location: 'test location 1',
                },
                {
                    location: 'test location 2',
                },
            ])
        })

        const {
            result,
            waitFor,
        } = renderHook(() => {
            return useUserLocations()
        },
        {
            wrapper: queryWrapper,
        })

        await waitFor(() => { return result.current.isSuccess })
        expect(result.current.data).toEqual([
            'test location 1',
            'test location 2',
        ])
    })
    test('should return correct data when user have no contacts', async () => {
        getContacts.mockImplementationOnce(() => {
            return Promise.resolve([])
        })

        const {
            result,
            waitFor,
        } = renderHook(() => {
            return useUserLocations()
        },
        {
            wrapper: queryWrapper,
        })

        await waitFor(() => { return result.current.isSuccess })
        expect(result.current.data).toEqual([])
    })
    test('should return correct data when user have no contacts 2', async () => {
        getContacts.mockImplementationOnce(() => {
            return Promise.resolve(undefined)
        })

        const {
            result,
            waitFor,
        } = renderHook(() => {
            return useUserLocations()
        },
        {
            wrapper: queryWrapper,
        })

        await waitFor(() => { return result.current.isSuccess })
        expect(result.current.data).toEqual([])
    })
})
