import React from 'react'
import PropTypes from 'prop-types'

import {
    Typography,
} from '@material-ui/core'

import Card from 'Card'
import DateRangeSelector from 'DateRangeSelector'
import TemperatureChart from 'TemperatureChart2'

import useStyles from './ContainerTemperatureChart.style'

const propTypes = {
    setRange: PropTypes.func.isRequired,
    timeRange: PropTypes.shape({
        from: PropTypes.string,
        to: PropTypes.string,
    }).isRequired,
    data: PropTypes.shape({
        sensorLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
        sensorData: PropTypes.arrayOf(PropTypes.shape({
            d: PropTypes.string,
            t: PropTypes.string,
        })),
    }),
    errors: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.string.isRequired,
    })),
}

const defaultProps = {
    data: null,
    errors: null,
}

const ContainerTemperatureChart = (props) => {
    const classes = useStyles()

    const {
        timeRange,
        setRange,
        data,
        errors,
    } = props

    const sensorLabels = data?.sensorLabels
    const sensorData = data?.sensorData

    return (
        <div className={classes.wrapper}>
            <div className={classes.chartContainer}>
                <Card className={classes.chartContainer}>
                    <Typography variant="h3">
                        Temperature in C
                    </Typography>
                    <DateRangeSelector
                        value={timeRange}
                        onChange={setRange}
                    />
                    {errors ? (
                        <div>
                            an error happend
                        </div>
                    ) : (
                        <TemperatureChart
                            {...props}
                            sensorData={sensorData}
                            sensorLabels={sensorLabels}
                        />
                    )}
                    {' '}
                </Card>
            </div>
        </div>
    )
}

ContainerTemperatureChart.propTypes = propTypes
ContainerTemperatureChart.defaultProps = defaultProps

export default ContainerTemperatureChart
