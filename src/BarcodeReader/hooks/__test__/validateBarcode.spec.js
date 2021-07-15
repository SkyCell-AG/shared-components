import validateBarcode from '../validateBarcode'

describe('BarcodeReader/hooks/validateBarcode', () => {
    it('should return true if code is consist only from numbers', () => {
        const code = '12412412412312312496'

        expect(validateBarcode(code)).toBeTruthy()
    })

    it('should return false if code is consist not only from numbers', () => {
        const code = '5495=69458*64993900203'

        expect(validateBarcode(code)).toBeFalsy()
    })

    it('should return false if code is undefined', () => {
        const code = undefined

        expect(validateBarcode(code)).toBeFalsy()
    })
})
