import {
    useEffect,
    useState,
    useCallback,
} from 'react'
import quagga from 'quagga'

import isMediaDevicesAvailable from './isMediaDevicesAvailable'

import validateBarcode from './validateBarcode'

const useBarcodeReader = ({
    input,
}) => {
    const [
        state,
        setState,
    ] = useState({
        decryptedData: {},
        detected: false,
        initialized: false,
    })

    const {
        detected,
        initialized,
    } = state

    const onInizialized = useCallback(() => {
        quagga.start()
        setState({
            ...state,
            initialized: true,
        })
    }, [state])

    const onSuccess = useCallback((data) => {
        if (data && validateBarcode(data.codeResult.code)) {
            setState({
                ...state,
                decryptedData: data,
                detected: true,
            })
        }
    }, [state])

    const initDecoder = useCallback(() => {
        const configDecoder = {
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: input,
            },
            decoder: {
                readers: ['code_128_reader'],
            },
            locator: {
                halfSample: true,
                patchSize: 'medium',
            },
        }

        quagga.init(configDecoder, onInizialized)
    }, [
        input,
        onInizialized,
    ])

    useEffect(() => {
        if (!isMediaDevicesAvailable) {
            return
        }
        if (input) {
            if (!initialized) {
                initDecoder()
                return
            }

            if (detected) {
                quagga.offDetected(onSuccess)
                quagga.stop()
            } else {
                quagga.onDetected(onSuccess)
            }
        }
    }, [
        input,
        initialized,
        detected,
        onSuccess,
        initDecoder,
    ])

    return {
        decryptedData: state.decryptedData,
    }
}

export default useBarcodeReader
