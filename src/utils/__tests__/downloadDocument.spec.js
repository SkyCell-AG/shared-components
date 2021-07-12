import downloadDocument from '../downloadDocument'

describe('downloadDocument', () => {
    it('should download file', () => {
        global.URL.createObjectURL = jest.fn()
        downloadDocument({
            headers: {
                'content-type': 'text/csv',
            },
            data: 'some-data',
        },
        'filename')

        expect(global.URL.createObjectURL).toHaveBeenCalledWith(
            new Blob(['some-data'], {
                type: 'text/csv',
            }),
        )
    })
})
