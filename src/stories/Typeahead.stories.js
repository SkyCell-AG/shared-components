import React from 'react'

import Typeahead from 'Typeahead'

const TypeaheadStory = {
    title: 'Example/Typeahead',
    component: Typeahead,
    argTypes: {
    },
}

const Template = (props) => {
    return (
        <Typeahead {...props} />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    valueField: 'id',
    labelField: 'value',
    loadOptions: () => Promise.resolve([{
        value: 'value1',
        id: 'id1',
    }, {
        value: 'value2',
        id: 'id2',
    }])
}

export default TypeaheadStory
