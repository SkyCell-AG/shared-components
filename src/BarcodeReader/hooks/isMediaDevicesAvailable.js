const isMediaDevicesAvailable = () => {
    return Boolean(
        navigator.mediaDevices
        && navigator.mediaDevices.getUserMedia
        && navigator.mediaDevices.enumerateDevices,
    )
}

export default isMediaDevicesAvailable
