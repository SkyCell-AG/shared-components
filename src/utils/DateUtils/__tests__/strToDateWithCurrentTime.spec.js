import moment from 'moment'
import strToDateWithCurrentTime from '../strToDateWithCurrentTime'

it('strToDateWithCurrentTime', () => {
    const currentDate = moment()
    const h = currentDate.hour()
    const m = currentDate.minutes()

    expect(
        strToDateWithCurrentTime('31.03.2001 16:32 +0200'),
    ).toEqual(new Date(`2001-03-31T${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:00.000Z`))
})
