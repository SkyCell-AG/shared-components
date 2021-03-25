import React from 'react'

import InputSingleline from 'InputSingleLine'

const InputSinglelineStory = {
    title: 'Example/InputSingleline',
    component: InputSingleline,
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
        <InputSingleline {...props} />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    title: 'Title',
    value: 'value',
}

export default InputSinglelineStory 
