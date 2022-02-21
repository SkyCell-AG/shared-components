import React from 'react'

import TemperatureChart from 'TemperatureChart'

const TemperatureChartStory = {
    title: 'TemperatureChart',
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
    excursion: "2021-12-03T11:30",
    temperatureTimeAxis: [
        "2021-12-03T09:10",
        "2021-12-03T09:20",
        "2021-12-03T09:30",
        "2021-12-03T09:40",
        "2021-12-03T09:50",
        "2021-12-03T10:00",
        "2021-12-03T10:10",
        "2021-12-03T10:20",
        "2021-12-03T10:30",
        "2021-12-03T10:40",
        "2021-12-03T10:50",
        "2021-12-03T11:00",
        "2021-12-03T11:10",
        "2021-12-03T11:20",
        "2021-12-03T11:30",
        "2021-12-03T11:40",
        "2021-12-03T11:50",
        "2021-12-03T12:00",
        "2021-12-03T12:10",
        "2021-12-03T12:20",
        "2021-12-03T12:30",
    ]
}

export default TemperatureChartStory
