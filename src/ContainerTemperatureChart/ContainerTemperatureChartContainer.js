import React, {
    useState,
} from 'react'

import dayPassedToRange from 'utils/dayPassedToRange'

import ContainerTemperatureChart from './ContainerTemperatureChart'

const ContainerTemperatureChartContainer = (props) => {
    const [
        timeRange,
        setRange,
    ] = useState(dayPassedToRange(1))

    return (
        <ContainerTemperatureChart
            {...props}
            timeRange={timeRange}
            setRange={setRange}
        />
    )
}

export default ContainerTemperatureChartContainer
