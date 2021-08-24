import React from 'react'

import TemperatureChart2 from 'TemperatureChart2'

const TemperatureChart2Story = {
    title: 'TemperatureChart2',
    component: TemperatureChart2,
    argTypes: {
        allowFullScreen: {
            type: 'boolean',
            contol: {
                type: 'checkbox'
            },
        }
    },
}

const Template = ({
    ...rest
}) => {
    return (
        <TemperatureChart2
            {...rest}
        />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    sensorData: [],
    sensorLabels: [],
    allowFullScreen: true,
}

export default TemperatureChart2Story
