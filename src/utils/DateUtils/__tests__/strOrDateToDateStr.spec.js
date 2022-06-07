import strOrDateToDateStr from '../strOrDateToDateStr'

it('strOrDateToDateStr with string', () => {
    expect(
        strOrDateToDateStr('31.03.2001 16:32 +0200'),
    ).toEqual('31.03.2001')
})
it('strToDate with date', () => {
    expect(
        strOrDateToDateStr(new Date('2001-03-31T14:32:00.000Z')),
    ).toEqual('31.03.2001')
})
