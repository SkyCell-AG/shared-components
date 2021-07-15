import {
    useEffect,
    useState,
    useCallback,
} from 'react'

import isMediaDevicesAvailable from './isMediaDevicesAvailable'

const useEnumerateDevices = () => {
    const [
        device,
        setDevice,
    ] = useState({
        facingMode: 'environment',
    })

    const getDevices = useCallback(() => {
        navigator.mediaDevices
            .enumerateDevices()
            .then((devicesInfo) => {
                const videoDevicesAmount = devicesInfo.filter((deviceInfo) => {
                    return deviceInfo.kind === 'videoinput'
                }).length

                const video = videoDevicesAmount === 2 ? {
                    facingMode: 'environment',
                } : true

                setDevice(video)
            })
    }, [setDevice])

    useEffect(() => {
        if (isMediaDevicesAvailable()) {
            getDevices()
        }
    }, [getDevices])

    return device
}

export default useEnumerateDevices
