import axios from 'axios'
import {
    getVariable,
} from 'init'

const businessObjects = ({
    token,
    ...rest
}) => {
    const skymindApiURL = getVariable('REACT_APP_SKYMIND_API')

    return axios.request({
        ...rest,
        baseURL: `${skymindApiURL}/business-objects`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

export default businessObjects
