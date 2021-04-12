import React, {
    Suspense,
} from 'react'
import PropTypes from 'prop-types'

import {
    Typography,
} from '@material-ui/core'

import Card from 'Card'
import DateRangeSelector from 'DateRangeSelector'
import Loading from 'Loading'

import ContainerChart from './ContainerChart'
import useStyles from './ContainerTemperatureChart.style'

const propTypes = {
    setRange: PropTypes.func.isRequired,
    timeRange: PropTypes.shape({
        from: PropTypes.instanceOf(Date),
        to: PropTypes.instanceOf(Date),
    }).isRequired,
}

const ContainerTemperatureChart = (props) => {
    const classes = useStyles()

    const {
        timeRange,
        setRange,
    } = props

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
                    <Suspense fallback={<Loading />}>
                        <ContainerChart
                            {...props}
                            timeRange={timeRange}
                        />
                    </Suspense>
                </Card>
            </div>
        </div>
    )
}

ContainerTemperatureChart.propTypes = propTypes

export default ContainerTemperatureChart
