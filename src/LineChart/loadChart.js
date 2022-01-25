/* global google */
import drop from 'lodash/drop'
import omit from 'lodash/omit'

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
                'controls',
            ],
        })

        const updatedChartData = chartData.map((element) => {
            return [
                new Date(element[0]),
                ...drop(element, 1),
            ]
        })

        const dateOffset = (24 * 60 * 60 * 1000) * 1

        const yesterday = new Date()

        yesterday.setTime(yesterday.getTime() - dateOffset)

        const drawChart = () => {
            const dashboard = new google.visualization.Dashboard(elm)
            const getSeries = () => {
                return options.series.map((
                    option,
                ) => {
                    return omit(option, [
                        'pointSize',
                        'lineWidth',
                    ])
                })
            }

            const control = new google.visualization.ControlWrapper({
                controlType: 'ChartRangeFilter',
                containerId: 'rangeFilter',
                options: {
                    filterColumnIndex: 0,
                    ui: {
                        chartType: 'LineChart',
                        chartOptions: {
                            ...options,
                            series: getSeries(),
                        },
                    },
                },
                state: {
                    range: {
                        start: yesterday,
                        end: new Date(),
                    },
                },
            })

            const chart = new google.visualization.ChartWrapper({
                chartType: 'LineChart',
                containerId: 'chart',
                options: {
                    ...options,
                },
            })

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

            dashboard.bind(control, chart)
            dashboard.draw(data)
        }

        return google.charts.setOnLoadCallback(drawChart)
    })
        .catch(onError)
}

export default loadChart
