import {
    useJWTToken,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'
import {
    NoEnvVarError,
} from 'init'
import getContacts from './getContacts'

const useContacts = (emailsFilter) => {
    const token = useJWTToken()

    return useQuery({
        queryKey: [
            'getContacts',
            {
                emails: emailsFilter,
                token,
            },
        ],
        queryFn: getContacts,
        enabled: Boolean(emailsFilter && emailsFilter.length > 0),
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => {
            if (error instanceof NoEnvVarError) {
                return false
            }
            return error.statusCode === 404 && failureCount <= 3
        },
    })
}

export default useContacts
