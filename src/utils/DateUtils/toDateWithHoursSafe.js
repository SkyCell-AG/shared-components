const toDateWithHoursSafe = (d, hours) => {
    return d ? new Date(d).setHours(...hours) : d
}

export default toDateWithHoursSafe
