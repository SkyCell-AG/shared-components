import axios from 'axios'

const businessObjects = ({
    token,
    ...rest
}) => {
    return axios.request({
        ...rest,
        baseURL: `${process.env.REACT_APP_SKYMIND_API}/business-objects`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export default businessObjects
