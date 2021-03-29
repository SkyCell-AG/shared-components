import React, {
    useState,
} from 'react'
import PropTypes from 'prop-types'
import {
    useLazyLoadQuery,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro' // eslint-disable-line

import dayPassedToRange from 'utils/dayPassedToRange'
import dateToISO from 'utils/dateToISO'

import ContainerTemperatureChart from './ContainerTemperatureChart'

const propTypes = {
    serialNumber: PropTypes.string.isRequired,
}

const ContainerTemperatureChartContainer = (props) => {
    const {
        serialNumber,
    } = props

    const [
        timeRange,
        setRange,
    ] = useState(dayPassedToRange(1))

    const {
        sensorDataContainer,
    } = useLazyLoadQuery(graphql`
        query ContainerTemperatureChartContainerQuery(
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
        <ContainerTemperatureChart
            {...props}
            timeRange={timeRange}
            setRange={setRange}
            data={sensorDataContainer}
        />
    )
}

ContainerTemperatureChartContainer.propTypes = propTypes

export default ContainerTemperatureChartContainer
