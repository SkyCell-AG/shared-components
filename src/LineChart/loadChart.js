/* global google */

import loadScript from 'utils/loadScript'

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

        const drawChart = () => {
            const data = new google.visualization.DataTable()

            createColumns(data, columns)

            const chartDataWithFillers = [
                ...chartData,
                [
                    new Date(),
                    0,
                    ...fillerNulls(columns),
                ],
            ]

            const updatedChartData = !isDateRange ? chartDataWithFillers : chartData

            data.addRows(updatedChartData)

            const dateFormat = new google.visualization.DateFormat({
                formatType: 'medium', timeZone: 0,
            })

            dateFormat.format(data, 0)

            const xTicks = Array(data.getNumberOfRows() - 1).fill(null).map((_, index) => {
                return {
                    v: data.getValue(index, 0),
                    f: data.getFormattedValue(index, 0),
                }
            })

            const chart = new google.visualization.LineChart(elm)

            chart.draw(data, {
                hAxis: {
                    ticks: xTicks,
                },
            })

            const optionsUpdated = {
                ...options,
                hAxis: {
                    ticks: xTicks,
                },
            }

            chart.draw(data, optionsUpdated)
        }

        return google.charts.setOnLoadCallback(drawChart)
    })
        .catch(onError)
}

export default loadChart
