import {
    useJWTToken,
    useAuth,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'
import queryRetry from './query-utils'

const useQueryGetUserContacts = (queryFn, options = {}) => {
    const {
        user,
    } = useAuth()

    const token = useJWTToken()

    return useQuery({
        queryKey: [
            'getUserContacts',
            {
                emails: [user?.email],
                token,
            },
        ],
        queryFn,
        enabled: Boolean(user),
        refetchOnWindowFocus: false,
        retry: queryRetry,
        ...options,
    })
}

export default useQueryGetUserContacts
