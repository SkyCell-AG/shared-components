import loadScript from 'utils/loadScript'
import loadChart from '../loadChart'

jest.mock('utils/loadScript', () => {
    return jest.fn()
})

describe('loadChart function', () => {
    it('loadScript function is called', () => {
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

        loadScript.mockResolvedValue('data')

        loadChart(chartData, elm, columns, options, onError, isDateRange)

        expect(loadScript).toBeCalled()
    })
})
