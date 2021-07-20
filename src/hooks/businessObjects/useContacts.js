import {
    useJWTToken,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'
import queryRetry from './query-utils'
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
        retry: queryRetry,
    })
}

export default useContacts
