import dateToDateStr from './dateToDateStr'
import strToDate from './strToDate'

const strOrDateToDateStr = (value) => {
    if (!value) return value
    if (typeof value === 'string') {
        return dateToDateStr(strToDate(value))
    }
    return dateToDateStr(value)
}

export default strOrDateToDateStr
