import {
    NoEnvVarError,
} from 'init'
import queryRetry from '../query-utils'

test('queryRetry should retry if 1 try', () => {
    expect(queryRetry(1, {
        statusCode: 404,
    })).toBeTruthy()
})
test('queryRetry should not retry if 4 try', () => {
    expect(queryRetry(4, {
        statusCode: 404,
    })).toBeFalsy()
})
test('queryRetry should not retry if not 404 error', () => {
    expect(queryRetry(1, {})).toBeFalsy()
})
test('queryRetry should not retry if NoEnvVarError', () => {
    expect(queryRetry(1, new NoEnvVarError('test'))).toBeFalsy()
})
