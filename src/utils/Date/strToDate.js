import moment from 'moment'

import dateTimeZonedMask from './dateTimeZonedMask'

const strToDate = (str, mask = dateTimeZonedMask) => {
    if (!str) {
        return null
    }

    return moment(str, mask).toDate()
}

export default strToDate
