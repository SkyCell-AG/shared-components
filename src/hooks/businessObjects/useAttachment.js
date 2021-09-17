import {
    useJWTToken,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'

import getAttachment from './queries/getAttachment'

function useAttachment({
    file,
    fileName,
    enabled,
    description,
}) {
    const token = useJWTToken()

    return useQuery({
        queryKey: [
            'getAttachment',
            {
                file,
                fileName,
                description,
                token,
            },
        ],
        queryFn: getAttachment,
        enabled,
        refetchOnWindowFocus: false,
    })
}

export default useAttachment
