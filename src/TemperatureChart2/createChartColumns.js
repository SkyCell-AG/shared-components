const column = [
    [{
        type: 'string', role: 'annotation',
    }],
    [{
        type: 'string', role: 'annotationText',
    }],
]

const createChartColumns = (sensorLabels) => {
    return sensorLabels ? sensorLabels.reduce((arr, label) => {
        arr.push(
            [
                'number',
                `${label} [C°]`,
            ],
            ...column,
        )

        return arr
    }, []) : []
}

export default createChartColumns
