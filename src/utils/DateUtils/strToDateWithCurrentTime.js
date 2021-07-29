import moment from 'moment'

import strToDate from './strToDate'

const strToDateWithCurrentTime = (dateStr) => {
    const currentDate = moment()
    const h = currentDate.hour()
    const m = currentDate.minutes()
    const date = moment(strToDate(dateStr))

    date.set('hour', h)
    date.set('minutes', m)

    return date.toDate()
}

export default strToDateWithCurrentTime
