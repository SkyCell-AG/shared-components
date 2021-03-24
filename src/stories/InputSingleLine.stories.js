import React from 'react'

import ContainerTemperatureChart from 'ContainerTemperatureChart'

const ContainerTemperatureChartStory = {
    title: 'Example/ContainerTemperatureChart',
    component: ContainerTemperatureChart,
    argTypes: {
        title: {
            control: 'text',
        },
        value: {
            control: 'text',
        },
    },
}

const Template = (props) => {
    return (
        <ContainerTemperatureChart {...props} />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    title: 'Title',
    value: 'value',
}

export default ContainerTemperatureChartStory
