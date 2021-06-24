import {
    useJWTToken,
    useAuth,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'

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

export default useQueryGetContacts
