import React from 'react';

import LoadingScreen from 'LoadingScreen'

const LoadingScreenStory = {
    title: 'Example/LoadingScreen',
    component: LoadingScreen,
};

const Template = (props) => {
    return (
        <LoadingScreen {...props} />
    )
}

export const Primary = Template.bind({});

Primary.args = {};

export default LoadingScreenStory
