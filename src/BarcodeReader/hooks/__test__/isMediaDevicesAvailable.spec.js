import isMediaDevicesAvailable from '../isMediaDevicesAvailable'

const mockGetUserMedia = jest.fn(async () => {
    return new Promise((resolve) => {
        resolve('test')
    })
})

Object.defineProperty(global.navigator, 'mediaDevices', {
    value: {
        getUserMedia: mockGetUserMedia,
        enumerateDevices: mockGetUserMedia,
    },
    writable: true,
})

describe('BarcodeReader/hooks/isMediaDevicesAvailable', () => {
    it('should be true with mocks', () => {
        expect(isMediaDevicesAvailable()).toBeTruthy()
    })
})
