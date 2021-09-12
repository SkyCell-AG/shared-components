import React, {
    useMemo,
} from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

import LineChart from 'LineChart'
import FullScreen from 'FullScreen'
import {
    strToDate,
} from 'utils/DateUtils'

import createChartColumns from './createChartColumns'
import chartColumns from './chartColumns'
import options from './options'
import addNotationValues from '../utils/addNotationValues'

import useStyles from './TemperatureChart2.style'
import FailureMessage from './FailureMessage'

const propTypes = {
    sensorData: PropTypes.arrayOf(PropTypes.shape({
        d: PropTypes.arrayOf(PropTypes.number),
        t: PropTypes.string,
    })),
    sensorLabels: PropTypes.arrayOf(PropTypes.string),
    onError: PropTypes.func,
    isChartPrinting: PropTypes.bool,
    onFullScreen: PropTypes.func,
    userOptions: PropTypes.any, // eslint-disable-line
    temperatureChartFullscreen: PropTypes.bool,
    setTemperatureChartFullscreen: PropTypes.func,
    customColumns: PropTypes.arrayOf(PropTypes.array),
    customData: PropTypes.arrayOf(PropTypes.array),
    allowFullScreen: PropTypes.bool,
    customClassName: PropTypes.string,
}

const defaultProps = {
    sensorData: undefined,
    sensorLabels: undefined,
    onError: noop,
    onFullScreen: noop,
    customColumns: [],
    customData: [],
    isChartPrinting: false,
    userOptions: options,
    temperatureChartFullscreen: false,
    setTemperatureChartFullscreen: noop,
    allowFullScreen: true,
    customClassName: '',
}

const DAY = 24 * 60 * 60 * 1000

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
        customColumns,
        customData,
        allowFullScreen,
        customClassName,
    } = props

    const classes = useStyles()

    const FullScreenComponent = useMemo(() => {
        if (!allowFullScreen) {
            return ({
                children, // eslint-disable-line
            }) => {
                return (
                    <>
                        {children}
                    </>
                )
            }
        }

        return FullScreen
    }, [allowFullScreen])

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
            [
                'number',
                'Filler',
            ],
            ...createChartColumns(sensorLabels),
            ...customColumns,
        ]
    }, [
        sensorLabels,
        customColumns,
    ])

    const chartPrinting = useMemo(() => {
        return isChartPrinting
            ? classes.chartPrinting
            : customClassName || classes.chart
    }, [
        classes.chart,
        classes.chartPrinting,
        isChartPrinting,
        customClassName,
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
        if (!sensorData) {
            const date = new Date()

            return [[
                new Date(date.getTime() - DAY),
                0,
            ]]
        }
        return sensorData.map(({
            d,
            t,
        }, i) => {
            if (customData.length > 0) {
                return [
                    strToDate(t),
                    0,
                    ...addNotationValues(d),
                    ...customData[i],
                ]
            }

            return [
                strToDate(t),
                0,
                ...addNotationValues(d),
            ]
        })
    }, [
        sensorData,
        customData,
    ])

    return (
        <>
            {value
                ? (
                    <div
                        className={classes.wrapper}
                    >
                        <FullScreenComponent
                            {...props}
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
                        </FullScreenComponent>
                    </div>
                )
                : (
                    <FailureMessage />
                )}
        </>
    )
}

TemperatureChart2.propTypes = propTypes
TemperatureChart2.defaultProps = defaultProps

export default TemperatureChart2
