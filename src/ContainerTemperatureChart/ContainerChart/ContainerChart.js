import React from 'react'
import PropTypes from 'prop-types'
import {
    useLazyLoadQuery,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro' // eslint-disable-line

import dateToISO from 'utils/dateToISO'
import TemperatureChart from 'TemperatureChart2'

const propTypes = {
    serialNumber: PropTypes.string.isRequired,
    timeRange: PropTypes.shape({
        from: PropTypes.instanceOf(Date),
        to: PropTypes.instanceOf(Date),
    }).isRequired,
}

const ContainerChart = (props) => {
    const {
        serialNumber,
        timeRange,
    } = props

    const {
        sensorDataContainer,
    } = useLazyLoadQuery(graphql`
        query ContainerChartQuery(
            $serialNumber: String!,
            $from: String!,
            $to: String!
        ) {
            sensorDataContainer(
                serialNumber: $serialNumber,
                from: $from,
                to: $to,
                position: [AMBIENT, INTERNAL],
                loggerType: CARTASENSE
            ) {
                sensorLabels
                sensorData {
                    d
                    t
                }
            }
        }
    `, {
        serialNumber,
        from: dateToISO(timeRange.from),
        to: dateToISO(timeRange.to),
    })

    return (
        <TemperatureChart
            {...props}
            sensorData={sensorDataContainer?.sensorData}
            sensorLabels={sensorDataContainer?.sensorLabels}
        />
    )
}

ContainerChart.propTypes = propTypes

export default ContainerChart
