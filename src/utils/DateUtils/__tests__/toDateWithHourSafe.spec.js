import toDateWithHoursSafe from '../toDateWithHoursSafe'

it('toDateWithHoursSafe with string', () => {
    expect(
        toDateWithHoursSafe('2018-06-10T23:59:59.000Z', [
            0,
            0,
            0,
        ]),
    ).toEqual(1528588800000)
})

it('toDateWithHoursSafe with null', () => {
    expect(
        toDateWithHoursSafe(null),
    ).toEqual(null)
})
