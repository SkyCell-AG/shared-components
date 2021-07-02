import {
    useJWTToken,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'

import businessObjects from 'services/businessObjects'

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
    return businessObjects({
        method: 'GET',
        url: '/v1/process/empty',
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
