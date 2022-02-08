import loadScript from 'utils/loadScript'
import loadChart from '../loadChart'

jest.mock('utils/loadScript', () => {
    return jest.fn()
})

const chartData = [
    [
        new Date('Mon Nov 15 2021 14:30:00 GMT+0000 (Greenwich Mean Time)'),
        0,
        3.5,
    ],
    [
        new Date('Mon Nov 15 2021 14:35:00 GMT+0000 (Greenwich Mean Time)'),
        0,
        3.5,
    ],
]
// eslint-disable-next-line react/react-in-jsx-scope
const elm = <div />
const columns = [
    [
        'datetime',
        'Date',
    ],
    [
        'number',
        'Filler',
    ],
    [
        'number',
        'Temperature 0000133530 [C°]',
    ],
]
const options = {
    axisTitlesPosition: 'none',
}
const onError = jest.fn()
const isDateRange = true

xdescribe('loadChart function', () => {
    it('loadScript function is called', () => {
        loadScript.mockImplementation(() => {
            return Promise.resolve('data')
        })

        loadChart(chartData, elm, columns, options, isDateRange, onError)

        loadScript().then(() => {
            expect(loadScript).toBeCalledWith('https://www.gstatic.com/charts/loader.js')
        })
    })

    it('load google chart data', () => {
        const google = {
            charts: {
                load: () => { return jest.fn() },
                setOnLoadCallback: (draw) => {
                    return draw()
                },
                draw: () => { return jest.fn() },
            },
            visualization: {
                DataTable: () => {
                    return {
                        addColumn: () => { return jest.fn() },
                        addRows: () => { return jest.fn() },
                    }
                },
                LineChart: () => {
                    return {
                        draw: () => { return jest.fn() },
                    }
                },
            },
        }
        const spySetOnLoadCallback = jest.spyOn(google.charts, 'setOnLoadCallback')
        const spyDataTable = jest.spyOn(google.visualization, 'DataTable')
        const spyLineChart = jest.spyOn(google.visualization, 'LineChart')

        global.window.google = google

        loadScript.mockImplementation(() => {
            return Promise.resolve(loadScript)
        })

        loadChart(chartData, elm, columns, options, isDateRange, onError)

        loadScript().then(() => {
            expect(spyLineChart).toHaveBeenCalled()
            expect(spyDataTable).toHaveBeenCalled()
            expect(spySetOnLoadCallback).toHaveBeenCalled()
        })
    })

    it('load google chart data for false DateRange', () => {
        const google = {
            charts: {
                load: () => { return jest.fn() },
                setOnLoadCallback: (draw) => {
                    return draw()
                },
                draw: () => { return jest.fn() },
            },
            visualization: {
                DataTable: () => {
                    return {
                        addColumn: () => { return jest.fn() },
                        addRows: () => { return jest.fn() },
                    }
                },
                LineChart: () => {
                    return {
                        draw: () => { return jest.fn() },
                    }
                },
            },
        }
        const spySetOnLoadCallback = jest.spyOn(google.charts, 'setOnLoadCallback')
        const spyDataTable = jest.spyOn(google.visualization, 'DataTable')
        const spyLineChart = jest.spyOn(google.visualization, 'LineChart')

        global.window.google = google

        loadScript.mockImplementation(() => {
            return Promise.resolve(loadScript)
        })

        loadChart(chartData, elm, columns, options, false, onError)

        return loadScript().then(() => {
            expect(spyLineChart).toHaveBeenCalled()
            expect(spyDataTable).toHaveBeenCalled()
            expect(spySetOnLoadCallback).toHaveBeenCalled()
        })
    })
})
