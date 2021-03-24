import React from 'react'

import TemperatureChart from 'TemperatureChart'

const TemperatureChartStory = {
    title: 'Example/TemperatureChart',
    component: TemperatureChart,
    argTypes: {
        ambient: {
            control: 'array',
        },
        simulated: {
            control: 'array',
        },
    },
}

const Template = ({
    ambient,
    simulated,
    ...rest
}) => {
    return (
        <TemperatureChart
            simulated={simulated.map((num) => { return parseInt(num, 10) })}
            ambient={ambient.map((num) => { return parseInt(num, 10) })}
            {...rest}
        />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    ambient: [
        20,
        52,
        32,
        40,
        58,
        22,
        52,
        32,
        41,
        54,
        20,
        52,
        32,
        40,
        58,
        22,
        52,
        32,
        41,
        54,
    ],
    simulated: [
        2,
        3,
        1,
        4,
        2,
        2,
        3,
        1,
        4,
        2,
        2,
        3,
        1,
        4,
        2,
        2,
        3,
        1,
        4,
        2,
    ],
    energyLevel: [
        100,
        98,
        96,
        97,
        95,
        100,
        98,
        96,
        97,
        95,
        100,
        98,
        96,
        97,
        95,
        100,
        98,
        96,
        97,
        95,
    ],
    excursion: 4,
}

export default TemperatureChartStory
