import React from 'react'

import Typeahead from 'Typeahead'

const TypeaheadStory = {
    title: 'Example/Typeahead',
    component: Typeahead,
    argTypes: {
        loadOptions: {
            control: 'text',
        },
        loadLabel: {
            control: 'text',
        },
        value: {
            control: 'text',
        },
        valueField: {
            control: 'text',
        },
        labelField: {
            control: 'text',
        },
    },
}

const Template = (props) => {
    return (
        <Typeahead {...props} />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    valueField: '1',
    labelField: 'id',
}

export default TypeaheadStory
