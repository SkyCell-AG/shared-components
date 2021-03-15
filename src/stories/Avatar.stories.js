import React from 'react';

import Avatar from 'Avatar'

const AvatarStory = {
    title: 'Example/Avatar',
    component: Avatar,
    argTypes: {
        data: {
            control: 'string',
        },
        status: {
            control: 'string',
        },
    },
};

const Template = (props) => {
    return (
        <Avatar {...props} />
    )
}

export const Primary = Template.bind({});

Primary.args = {
    data: '',
    status: 'FAILURE',
};

export default AvatarStory
