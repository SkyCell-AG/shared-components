import moment from 'moment'

const dateToIso = (d) => {
    const date = moment(d).utc().format('YYYY-MM-DD HH:mm:ss')

    return moment(date).format('YYYY-MM-DDTHH:mm')
}

export default dateToIso
