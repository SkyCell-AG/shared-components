const addNotationValues = (data) => {
    return data.map((item) => {
        return [
            item,
            null,
            null,
        ]
    }).flat()
}

export default addNotationValues
