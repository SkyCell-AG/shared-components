import {
    useJWTToken,
    useAuth,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'
import flow from 'lodash/flow'

import businessObjects from 'services/businessObjects'

const getContacts = ({
    queryKey: [
        _key, // eslint-disable-line no-unused-vars
        {
            email,
            token,
        },
    ],
}) => {
    return businessObjects({
        method: 'POST',
        url: '/v1/contact/filter',
        data: {
            includeFilters: {
                email: [email],
            },
            start: 0,
            rows: 50,
        },
        token,
    })
        .then((data) => {
            return data.data.items
        })
}

const useQueryGetContacts = (queryFn) => {
    const {
        user,
    } = useAuth()

    const token = useJWTToken()

    return useQuery({
        queryKey: [
            'getContacts',
            {
                email: user?.email,
                token,
            },
        ],
        queryFn,
        enabled: Boolean(user),
        refetchOnWindowFocus: false,
    })
}

const useUserContacts = () => {
    return useQueryGetContacts(getContacts)
}

const getLocales = flow([
    getContacts,
    (promise) => {
        return promise.then((contacts) => {
            if (contacts && contacts.length === 0) return []
            return contacts.map((contact) => {
                return contact.address.addressName
            })
        })
    },
])

export const useUserLocales = () => {
    return useQueryGetContacts(getLocales)
}

export default useUserContacts
