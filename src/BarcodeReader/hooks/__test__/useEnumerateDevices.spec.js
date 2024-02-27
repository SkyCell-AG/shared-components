import {
    renderHook, act,
} from '@testing-library/react'
import useEnumerateDevices from '../useEnumerateDevices'
import isMediaDevicesAvailable from '../isMediaDevicesAvailable'

const correctFacingMode = {
    facingMode: 'environment',
}

const mockEnumerateDevicesPromise = (devices) => {
    const promise = Promise.resolve(devices)
    const mockMediaDevices = {
        enumerateDevices: jest.fn().mockImplementation(() => {
            return promise
        }),
    }

    Object.defineProperty(window.navigator, 'mediaDevices', {
        writable: true,
        value: mockMediaDevices,
    })

    isMediaDevicesAvailable.mockReturnValue(true)
    return promise
}

jest.mock('BarcodeReader/hooks/isMediaDevicesAvailable', () => {
    return jest.fn()
})

describe('BarcodeReader/hooks/useEnumerateDevices', () => {
    it('should return correct facing mode for no isMediaDevicesAvailable', () => {
        const {
            result,
        } = renderHook(() => { return useEnumerateDevices() })

        expect(result.current).toEqual(correctFacingMode)
    })

    it('should return correct facing mode for 2 videoinput', async () => {
        const promise = mockEnumerateDevicesPromise([
            {
                kind: 'videoinput',
            },
            {
                kind: 'videoinput',
            },
        ])

        const {
            result,
        } = renderHook(() => { return useEnumerateDevices() })

        await act(() => { return promise })

        expect(result.current).toEqual(correctFacingMode)
    })

    it('should return correct facing mode for 0 videoinput', async () => {
        const promise = mockEnumerateDevicesPromise([])

        const {
            result,
        } = renderHook(() => { return useEnumerateDevices() })

        await act(() => { return promise })

        expect(result.current).toEqual(true)
    })
})
