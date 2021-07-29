import dateToStr from '../dateToStr'
import strToDate from '../strToDate'

it('dateToStr', () => {
    expect(
        dateToStr(new Date('2001-03-31T14:32:00.000Z')),
    ).toEqual(
        dateToStr(strToDate('31.03.2001 16:32 +0200')),
    )
})
