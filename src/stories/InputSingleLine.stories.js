import React from 'react'

import InputSingleLine from "InputSingleLine";

const InputSingleLineStory = {
    title: 'Example/InputSingleLine',
    component: InputSingleLine,
    argTypes: {
        title: {
            control: 'text',
        },
        value: {
            control: 'text',
        },
    },
};

const Template = (props) => {
    return (
        <InputSingleLine {...props} />
    )
}

export const Primary = Template.bind({});

Primary.args = {
    title: 'Title',
    value: 'value',
};

export default InputSingleLineStory