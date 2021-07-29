import moment from 'moment'

import dateMask from './dateMask'

const dateToDateStr = (d) => {
    return moment(d).format(dateMask)
}

export default dateToDateStr
