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
            params,
        },
    ],
}) => {
    return requestBusinessObjects({
        method: 'GET',
        url: 'process/empty',
        params: {
            process,
            ...params,
        },
        token,
    }).then((response) => {
        return response.data
    })
}

function useEmptyProcess(process, params = {}) {
    const token = useJWTToken()

    return useQuery({
        queryKey: [
            'getEmptyProcess',
            {
                token,
                process,
                params,
            },
        ],
        queryFn: getEmptyProcess,
        refetchOnWindowFocus: false,
    })
}

export default useEmptyProcess
