import moment from 'moment'

function dayPassedToRange(value) {
    const to = new Date()

    const from = moment().subtract(value, 'days').toDate()

    return {
        from,
        to,
    }
}

export default dayPassedToRange
