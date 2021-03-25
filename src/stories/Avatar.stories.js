import React from 'react'

import Avatar from 'Avatar'

const AvatarStory = {
    title: 'Example/Avatar',
    component: Avatar,
    argTypes: {
        img: {
            control: 'string',
        },
    },
}

const Template = (props) => {
    return (
        <Avatar {...props} />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    img: '',
}

export default AvatarStory
