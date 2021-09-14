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

export default getProcesses
