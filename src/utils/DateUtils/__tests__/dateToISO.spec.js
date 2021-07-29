import dateToISO from '../dateToISO'

it('dateToISO', () => {
    expect(
        dateToISO(new Date('2001-03-31T14:32:00.000Z')),
    ).toEqual('2001-03-31T14:32')
})
