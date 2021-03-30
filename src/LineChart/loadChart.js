/* global google */

import loadScript from 'utils/loadScript'

const url = 'https://www.gstatic.com/charts/loader.js'

const createColumns = (chart, chartColumns) => {
    chartColumns.forEach((column) => {
        chart.addColumn(...column)
    })
}

const loadChart = (chartData, elm, columns, options, onError) => {
    loadScript(url).then(() => {
        google.charts.load('current', {
            packages: [
                'corechart',
                'line',
            ],
        })

        const drawChart = () => {
            const data = new google.visualization.DataTable()

            createColumns(data, columns)

            data.addRows(chartData)

            const chart = new google.visualization.LineChart(elm)

            chart.draw(data, options)
        }

        return google.charts.setOnLoadCallback(drawChart)
    })
        .catch(onError)
}

export default loadChart
