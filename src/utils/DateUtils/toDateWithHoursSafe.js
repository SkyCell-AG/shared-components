import strToDate from './strToDate'

const toDateWithHoursSafe = (d, hours) => {
    if (!d) {
        return d
    }
    const date = (typeof d === 'string') ? strToDate(d) : new Date(d)

    return d ? date.setHours(...hours) : d
}

export default toDateWithHoursSafe
