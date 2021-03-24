const getScaleOffset = ({
    ambient,
    simulated,
}) => {
    const max = Math.max(...ambient, ...simulated)
    const min = Math.min(...ambient, ...simulated)

    const range = max - min
    const scale = range / 100

    return scale
}

export default getScaleOffset
