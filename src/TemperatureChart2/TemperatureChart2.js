import React, {
    useMemo,
} from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

import LineChart from 'LineChart'
import FullScreen from 'FullScreen'
import strToDate from 'utils/strToDate'

import createChartColumns from './createChartColumns'
import chartColumns from './chartColumns'
import options from './options'
import addNotationValues from './addNotationValues'

import useStyles from './TemperatureChart2.style'

const propTypes = {
    sensorData: PropTypes.arrayOf(PropTypes.shape({
        d: PropTypes.string.isRequired,
        t: PropTypes.string.isRequired,
    })).isRequired,
    sensorLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    onError: PropTypes.func,
    isChartPrinting: PropTypes.bool,
    onFullScreen: PropTypes.func,
    userOptions: PropTypes.any, // eslint-disable-line
    temperatureChartFullscreen: PropTypes.bool,
    setTemperatureChartFullscreen: PropTypes.func,
}

const defaultProps = {
    onError: noop,
    onFullScreen: noop,
    isChartPrinting: false,
    userOptions: options,
    temperatureChartFullscreen: false,
    setTemperatureChartFullscreen: noop,
}

const TemperatureChart2 = (props) => {
    const {
        sensorData,
        sensorLabels,
        isChartPrinting,
        onFullScreen,
        userOptions,
        temperatureChartFullscreen,
        setTemperatureChartFullscreen,
        onError,
    } = props

    const classes = useStyles()

    const chartArea = useMemo(() => {
        return {
            left: 20,
            top: 10,
            width: '100%',
            height: '87%',
        }
    }, [])

    const columns = useMemo(() => {
        return [
            ...chartColumns,
            ...createChartColumns(sensorLabels),
        ]
    }, [sensorLabels])

    const chartPrinting = useMemo(() => {
        return isChartPrinting
            ? classes.chartPrinting
            : classes.chart
    }, [
        classes.chart,
        classes.chartPrinting,
        isChartPrinting,
    ])

    const chartOptions = useMemo(() => {
        return isChartPrinting ? {
            ...userOptions,
            chartArea,
        } : userOptions
    }, [
        chartArea,
        isChartPrinting,
        userOptions,
    ])

    const value = useMemo(() => {
        return sensorData.map(({
            d,
            t,
        }) => {
            return [
                strToDate(t),
                ...addNotationValues(d),
            ]
        })
    }, [sensorData])

    return (
        <FullScreen
            {...props}
            className={classes.wrapper}
            onFullScreen={onFullScreen}
            setTemperatureChartFullscreen={setTemperatureChartFullscreen}
        >
            <LineChart
                value={value}
                columns={columns}
                userOptions={chartOptions}
                onError={onError}
                className={temperatureChartFullscreen
                    ? classes.fullscreen
                    : chartPrinting}
            />
        </FullScreen>
    )
}

TemperatureChart2.propTypes = propTypes
TemperatureChart2.defaultProps = defaultProps

export default TemperatureChart2
