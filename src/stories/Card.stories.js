import React from 'react'

import Card from 'Card'

const CardStory = {
    title: 'Card',
    component: Card,
    argTypes: {
        title: {
            control: 'text',
        },
        children: {
            control: 'text',
        },
    },
}

const Template = (props) => {
    return (
        <Card {...props} />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    title: 'Title Card',
    children: 'body',
}

export default CardStory
