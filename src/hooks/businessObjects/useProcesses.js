import {
    useJWTToken,
} from '@skycell-ag/auth'
import {
    useQuery,
} from 'react-query'
import {
    NoEnvVarError,
} from 'init'
import businessObjects from 'services/businessObjects'

const getProcesses = ({
    queryKey: [
        _key, // eslint-disable-line no-unused-vars
        {
            location,
            token,
        },
    ],
}) => {
    return businessObjects({
        method: 'GET',
        url: `/v1/process/available?location=${location}`,
        token,
    })
        .then((data) => {
            return data.data
        })
}

function useProcesses(addressId) {
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
    })
}

export default useProcesses
