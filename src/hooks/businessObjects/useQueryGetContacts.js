import {
    useJWTToken,
    useAuth,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'
import {
    NoEnvVarError,
} from 'init'

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
        retry: (failureCount, error) => {
            if (error instanceof NoEnvVarError) {
                return false
            }
            return error.statusCode === 404 && failureCount <= 3
        },
    })
}

export default useQueryGetContacts
