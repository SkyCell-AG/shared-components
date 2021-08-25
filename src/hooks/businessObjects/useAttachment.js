import {
    useJWTToken,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'

import getAttachment from './queries/getAttachment'

function useAttachment(file, fileName, enabled) {
    const token = useJWTToken()

    return useQuery({
        queryKey: [
            'getAttachment',
            {
                file,
                fileName,
                token,
            },
        ],
        queryFn: getAttachment,
        enabled,
        refetchOnWindowFocus: false,
    })
}

export default useAttachment
