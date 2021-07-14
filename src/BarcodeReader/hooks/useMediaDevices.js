import {
    useEffect,
    useState,
    useCallback,
} from 'react'

import useEnumerateDevices from './useEnumerateDevices'
import isMediaDevicesAvailable from './isMediaDevicesAvailable'

const useMediaDevices = () => {
    const [
        state,
        setState,
    ] = useState({
        error: null,
        cameraStreamRecieved: false,
        cameraStream: null,
    })

    const {
        error,
        cameraStreamRecieved,
        cameraStream,
    } = state

    const device = useEnumerateDevices()

    const receiveStream = useCallback(() => {
        const constraints = {
            video: device,
        }

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                if (!cameraStreamRecieved) {
                    setState({
                        error: null,
                        cameraStreamRecieved: true,
                        cameraStream: stream,
                    })
                }
            })
            .catch((err) => {
                setState({
                    ...state,
                    error: err,
                })
            })
    }, [
        state,
        device,
        cameraStreamRecieved,
        setState,
    ])

    useEffect(() => {
        if (isMediaDevicesAvailable()) {
            receiveStream()
        }
    }, [receiveStream])

    return {
        cameraStream,
        cameraStreamRecieved,
        error,
    }
}

export default useMediaDevices
