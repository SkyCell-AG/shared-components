import toDateWithHoursSafe from './toDateWithHoursSafe'

const toDateRangeLimitSafe = (d, isMaxLimit = false) => {
    return toDateWithHoursSafe(d, isMaxLimit ? [
        23,
        59,
        59,
    ] : [
        0,
        0,
        0,
    ])
}

export default toDateRangeLimitSafe
