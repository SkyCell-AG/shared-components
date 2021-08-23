import {
    renderHook,
} from '@testing-library/react-hooks'
import {
    queryWrapper,
} from './utils'
import getContacts from '../getContacts'
import useUserContacts from '../useUserContacts'

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

describe('useUserContacts', () => {
    test('should return correct data when user have contacts', async () => {
        const contacts = [
            {
                location: 'test location 1',
                address: 'testAddress 1',
                other: 'somethingElse 1',
            },
            {
                location: 'test location 2',
                address: 'testAddress 2',
                other: 'somethingElse 2',
            },
        ]

        getContacts.mockImplementationOnce(() => {
            return Promise.resolve(contacts)
        })

        const {
            result,
            waitFor,
        } = renderHook(() => {
            return useUserContacts()
        },
        {
            wrapper: queryWrapper,
        })

        await waitFor(() => { return result.current.isSuccess })
        expect(result.current.data).toEqual(contacts)
    })

    test('should return correct data when user not have contacts', async () => {
        getContacts.mockImplementationOnce(() => {
            return Promise.resolve([])
        })

        const {
            result,
            waitFor,
        } = renderHook(() => {
            return useUserContacts()
        },
        {
            wrapper: queryWrapper,
        })

        await waitFor(() => { return result.current.isSuccess })
        expect(result.current.data).toEqual([])
    })
})
