function rangeToDayPassed({
    from, to,
}) {
    return Math.floor(
        (to.getTime() - from.getTime()) / 1000 / 60 / 60 / 24,
    )
}

export default rangeToDayPassed
