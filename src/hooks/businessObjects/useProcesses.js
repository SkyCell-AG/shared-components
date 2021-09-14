import {
    useJWTToken,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'
import {
    NoEnvVarError,
} from 'init'
import requestBusinessObjects from 'services/requestBusinessObjects'

const getProcesses = ({
    queryKey: [
        _key, // eslint-disable-line no-unused-vars
        {
            location,
            token,
        },
    ],
}) => {
    return requestBusinessObjects({
        method: 'GET',
        url: `process/availableprocesses?location=${location}`,
        token,
    })
        .then((data) => {
            return data.data
        })
}

function useProcesses(addressId, options = {}) {
    const token = useJWTToken()

    return useQuery({
        queryKey: [
            'getProcesses',
            {
                location: addressId,
                token,
            },
        ],
        queryFn: getProcesses,
        enabled: Boolean(addressId),
        refetchOnWindowFocus: false,
        retry: (failureCount, error) => {
            if (error instanceof NoEnvVarError) {
                return false
            }
            return error.statusCode === 404 && failureCount <= 3
        },
        ...options,
    })
}

export default useProcesses
