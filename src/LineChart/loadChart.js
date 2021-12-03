/* global google */

import loadScript from 'utils/loadScript'
import drop from 'lodash/drop'

const url = 'https://www.gstatic.com/charts/loader.js'

const createColumns = (chart, chartColumns) => {
    chartColumns.forEach((column) => {
        chart.addColumn(...column)
    })
}

const fillerNulls = (columns) => {
    return columns.slice(1, columns.length - 1).map(() => {
        return null
    })
}

const loadChart = (chartData, elm, columns, options, isDateRange, onError) => {
    loadScript(url).then(() => {
        google.charts.load('current', {
            packages: [
                'corechart',
                'line',
            ],
        })

        const updatedChartData = chartData.map((element) => {
            return [
                new Date(element[0]),
                ...drop(element, 1),
            ]
        })

        const drawChart = () => {
            const data = new google.visualization.DataTable()

            createColumns(data, columns)

            const date = new Date()
            const offset = date.getTimezoneOffset()

            const chartDataWithFillers = [
                ...updatedChartData,
                [
                    new Date(date.getTime() + offset * 60000),
                    0,
                    ...fillerNulls(columns),
                ],
            ]

            const updatedChartDataWithFillers = !isDateRange
                ? chartDataWithFillers : updatedChartData

            data.addRows(updatedChartDataWithFillers)

            const chart = new google.visualization.LineChart(elm)

            chart.draw(data, options)
        }

        return google.charts.setOnLoadCallback(drawChart)
    })
        .catch(onError)
}

export default loadChart
