import axios from 'axios'
import {
    getVariable,
} from 'init'
import requestBusinessObjects from '../requestBusinessObjects'

jest.mock('axios', () => {
    return {
        request: jest.fn(),
    }
})
jest.mock('init', () => {
    return {
        getVariable: jest.fn(),
    }
})

test('should use requestBusinessObjects', async () => {
    axios.request.mockImplementationOnce(() => { return Promise.resolve({}) })
    getVariable.mockImplementationOnce(() => { return 'test' })

    const token = 'test-token'
    const requestParams = {
        method: 'POST',
        url: 'contact/filter',
        data: {
            includeFilters: {
                email: 'test@email.com',
            },
        },
    }

    const result = requestBusinessObjects({
        token,
        ...requestParams,
    })

    await expect(result).resolves.toEqual({})

    expect(axios.request).toHaveBeenCalledWith(
        {
            baseURL: 'test/skycore-backend/v1/',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            ...requestParams,
        },
    )
})
