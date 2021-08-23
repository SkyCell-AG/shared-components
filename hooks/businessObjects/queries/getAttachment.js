import requestBusinessObjects from 'services/requestBusinessObjects'

const getAttachment = ({
    queryKey: [
        _key, // eslint-disable-line no-unused-vars
        {
            file,
            token,
        },
    ],
}) => {
    const imgFile = new FormData()

    imgFile.append('file', file)

    return requestBusinessObjects({
        method: 'POST',
        url: 'attachment',
        token,
        data: imgFile,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
        .then((data) => {
            return data.data
        })
}

export default getAttachment
