import moment from 'moment'

import dateTimeZonedMask from './dateTimeZonedMask'

const dateToStr = (date, mask = dateTimeZonedMask) => {
    return moment(date).format(mask)
}

export default dateToStr
