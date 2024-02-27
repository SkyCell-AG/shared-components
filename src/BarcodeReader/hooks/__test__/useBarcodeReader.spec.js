import {
    renderHook,
} from '@testing-library/react'

import useBarcodeReader from '../useBarcodeReader'

jest.mock('BarcodeReader/hooks/isMediaDevicesAvailable', () => {
    return jest.fn()
})

jest.mock('BarcodeReader/hooks/validateBarcode', () => {
    return jest.fn()
})

jest.mock('quagga', () => {
    return {
        start: jest.fn(),
        init: jest.fn(),
        stop: jest.fn(),
        offDetected: jest.fn(),
        onDetected: jest.fn(),
    }
})

describe('BarcodeReader/hooks/useBarcodeReader', () => {
    it('should be like this is no MediaDevices', () => {
        const {
            result,
        } = renderHook(() => {
            return useBarcodeReader({
                input: {},
            })
        })

        expect(result.current).toEqual({
            decryptedData: {},
        })
    })
})
