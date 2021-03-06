import theme from '@skycell-ag/theme'

const options = {
    chartArea: {
        left: 30,
        top: 20,
        width: '95%',
        height: '87%',
    },
    axisTitlesPosition: 'none',
    vAxis: {
        title: 'Temperature',
        gridlines: {
            count: 0,
        },
    },
    curveType: 'function',
    series: [
        {
            targetAxisIndex: 0,
            lineWidth: 0,
            color: 'transparent',
            pointSize: 0,
            visibleInLegend: false,
            tooltip: false,
        },
        {
            targetAxisIndex: 0,
            lineWidth: 3,
            color: theme.palette.common.purple,
            pointSize: 6,
        },
        {
            targetAxisIndex: 0,
            lineWidth: 3,
            color: '#61C6E9',
            pointSize: 6,
        },
        {
            targetAxisIndex: 0,
            lineWidth: 3,
            color: '#edae49',
            lineDashStyle: [
                4,
                4,
            ],
        },
        {
            targetAxisIndex: 0,
            lineWidth: 3,
            color: '#edae49',
            lineDashStyle: [
                4,
                4,
            ],
        },
    ],
}

export default options
