import axios from 'axios'
import {
    getVariable,
} from 'init'

const requestBusinessObjects = ({
    token,
    headers,
    ...rest
}) => {
    const skymindApiURL = getVariable('REACT_APP_SKYMIND_API')

    return axios.request({
        ...rest,
        baseURL: `${skymindApiURL}/business-objects/v1/`,
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
    })
}

export default requestBusinessObjects
