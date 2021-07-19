import getContainerNumberFromGRAI from '../utils'

describe('BarcodeReader/utils', () => {
    it('should return correct code', () => {
        expect(getContainerNumberFromGRAI('80030764015994011310030')).toEqual('011-10030')
    })
})
