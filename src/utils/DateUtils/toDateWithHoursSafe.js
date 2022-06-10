import strToDate from './strToDate'

const toDateWithHoursSafe = (d, hours) => {
    if (!d) {
        return d
    }
    const date = (typeof d === 'string') ? strToDate(d) : new Date(d)

    return date.setHours(...hours)
}

export default toDateWithHoursSafe
