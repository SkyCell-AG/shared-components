import moment from 'moment'
import dayPassedToRange from '../dayPassedToRange'

it('dayPassedToRange', () => {
    const rangeDate = dayPassedToRange(1)

    rangeDate.from.setMilliseconds(0)
    rangeDate.to.setMilliseconds(0)

    const expectedFrom = moment(new Date()).add(-1, 'days').toDate()
    const expectedTo = new Date()

    expectedFrom.setMilliseconds(0)
    expectedTo.setMilliseconds(0)

    expect(
        rangeDate,
    ).toEqual(
        {
            from: expectedFrom,
            to: expectedTo,
        },
    )
})
