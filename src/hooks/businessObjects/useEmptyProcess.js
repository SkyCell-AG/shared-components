import {
    useJWTToken,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'

import requestBusinessObjects from 'services/requestBusinessObjects'

const getEmptyProcess = ({
    queryKey: [
        // eslint-disable-next-line no-unused-vars
        _key,
        {
            process,
            token,
        },
    ],
}) => {
    return requestBusinessObjects({
        method: 'GET',
        url: 'process/empty',
        params: {
            process,
        },
        token,
    })
}

function useEmptyProcess(process) {
    const token = useJWTToken()

    return useQuery({
        queryKey: [
            'getEmptyProcess',
            {
                token,
                process,
            },
        ],
        queryFn: getEmptyProcess,
        refetchOnWindowFocus: false,
    })
}

export default useEmptyProcess
