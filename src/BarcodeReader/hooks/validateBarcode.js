const validateBarcode = (result) => {
    const regexp = new RegExp('^[0-9]*$')

    if (!result) {
        return false
    }

    return regexp.test(result)
}

export default validateBarcode
