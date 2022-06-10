import toDateWithHoursSafe from '../toDateWithHoursSafe'

it('toDateWithHoursSafe with string', () => {
    expect(
        toDateWithHoursSafe('07.06.2022 23:59 +0300', [
            0,
            0,
            0,
        ]),
    ).toEqual(1654560000000)
})

it('toDateWithHoursSafe with number', () => {
    expect(
        toDateWithHoursSafe(new Date(2022, 29, 4, 11, 20, 0).getTime(), [
            0,
            0,
            0,
        ]),
    ).toEqual(1717459200000)
})

it('toDateWithHoursSafe with null', () => {
    expect(
        toDateWithHoursSafe(null),
    ).toEqual(null)
})
