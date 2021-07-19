import {
    renderHook,
} from '@testing-library/react-hooks'
import TestRenderer from 'react-test-renderer'

import useMediaDevices from '../useMediaDevices'
import isMediaDevicesAvailable from '../isMediaDevicesAvailable'
import useEnumerateDevices from '../useEnumerateDevices'

jest.mock('BarcodeReader/hooks/isMediaDevicesAvailable', () => {
    return jest.fn()
})

jest.mock('BarcodeReader/hooks/useEnumerateDevices', () => {
    return jest.fn()
})

const mockUserMediaPromise = (media) => {
    const promise = Promise.resolve(media)
    const mockGetUserMedia = {
        getUserMedia: jest.fn().mockImplementation(() => {
            return promise
        }),
    }

    Object.defineProperty(window.navigator, 'mediaDevices', {
        writable: true,
        value: mockGetUserMedia,
    })

    isMediaDevicesAvailable.mockReturnValue(true)
    return promise
}

describe('BarcodeReader/hooks/useMediaDevices', () => {
    it('should be like this is no MediaDevices', () => {
        const {
            result,
        } = renderHook(() => { return useMediaDevices() })

        expect(result.current).toEqual({
            cameraStream: null,
            cameraStreamRecieved: false,
            error: null,
        })
    })
    it('should return cameraStream', async () => {
        const {
            act,
        } = TestRenderer

        const promise = mockUserMediaPromise({})

        useEnumerateDevices.mockReturnValue({
            facingMode: 'environment',
        })

        const {
            result,
        } = renderHook(() => { return useMediaDevices() })

        await act(() => { return promise })

        expect(result.current).toEqual({
            cameraStream: {},
            cameraStreamRecieved: true,
            error: null,
        })
    })
})
