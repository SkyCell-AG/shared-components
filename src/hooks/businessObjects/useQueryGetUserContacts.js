import {
    useJWTToken,
    useAuth,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'
import queryRetry from './query-utils'

const useQueryGetUserContacts = (queryFn) => {
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
        refetchOnMount: false,
        retry: queryRetry,
    })
}

export default useQueryGetUserContacts
