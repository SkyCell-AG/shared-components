import strToDate from '../strToDate'

it('strToDate', () => {
    expect(
        strToDate('31.03.2001 16:32 +0200'),
    ).toEqual(new Date('2001-03-31T14:32:00.000Z'))
})
it('strToDate to no string', () => {
    expect(
        strToDate(''),
    ).toEqual(null)
})
