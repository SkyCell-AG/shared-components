import requestBusinessObjects from 'services/requestBusinessObjects'

const getContacts = ({
    queryKey: [
        _key, // eslint-disable-line no-unused-vars
        {
            emails,
            token,
        },
    ],
}) => {
    return requestBusinessObjects({
        method: 'POST',
        url: 'contact/filter',
        data: {
            includeFilters: {
                email: emails,
            },
            start: 0,
            rows: 50,
        },
        token,
    })
        .then((data) => {
            return data.data.items
        })
}

export default getContacts
