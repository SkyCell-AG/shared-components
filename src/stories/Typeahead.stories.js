import React from 'react'

import Typeahead from 'Typeahead'

const TypeaheadStory = {
    title: 'Example/Typeahead',
    component: Typeahead,
    argTypes: {
        loadOptions: {
            control: 'string',
        },
        loadLabel: {
            control: 'string'
        },
        value: {
            control: 'string'
        },
        valueField: {
            control: 'string'
        },
        labelField: {
            control: 'string'
        },
    },
};

const Template = (props) => {
    console.log('props', props)
    return (
        <Typeahead {...props} />
    )
}

export const Primary = Template.bind({});

Primary.args = {
    valueField: '1',
    labelField: 'id',
};

export default TypeaheadStory