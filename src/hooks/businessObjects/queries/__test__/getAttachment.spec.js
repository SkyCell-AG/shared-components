import requestBusinessObjects from 'services/requestBusinessObjects'

import getAttachment from '../getAttachment'

jest.mock('services/requestBusinessObjects', () => {
    return jest.fn()
})

test('should use getAttachment', async () => {
    requestBusinessObjects.mockImplementation(() => {
        return Promise.resolve({
            data: {
                id: 34,
            },
        })
    })

    const t = getAttachment({
        queryKey: [
            'someKey',
            {
                description: 'test',
            },
        ],
    })

    expect(t).resolves.toEqual({
        id: 34,
    })
})

test('should use getAttachment with description', async () => {
    requestBusinessObjects.mockImplementation(() => {
        return Promise.resolve({
            data: {
                id: 34,
            },
        })
    })

    const t = getAttachment({
        queryKey: [
            'someKey',
            {},
        ],
    })

    expect(t).resolves.toEqual({
        id: 34,
    })
})
