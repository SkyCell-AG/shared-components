import React from 'react'

import FailureMessage from 'TemperatureChart2/FailureMessage'

const FailureMessageStory = {
    title: 'FailureMessage',
    component: FailureMessage,
}

const Template = (props) => {
    return (
        <FailureMessage {...props} />
    )
}

export const Primary = Template.bind({})

Primary.args = {}

export default FailureMessageStory
