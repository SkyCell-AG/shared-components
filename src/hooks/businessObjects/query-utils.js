import {
    NoEnvVarError,
} from 'init'

const queryRetry = (failureCount, error) => {
    if (error instanceof NoEnvVarError) {
        return false
    }
    return error.statusCode === 404 && failureCount <= 3
}

export default queryRetry
