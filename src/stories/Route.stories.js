import React from 'react'

import Route from 'Route'

const RouteStory = {
    title: 'Route',
    component: Route,
    argTypes: {
        destinations: {
            control: 'object',
            description: 'Array of tuples [longitude, latitude]',
        },
    },
}

const Template = (props) => {
    return (
        <Route {...props} />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    destinations: [
        [
            -73.780968,
            40.641766,
        ],
        [
            -112.937469,
            40.199387,
        ],
        [
            55.364445,
            25.252777,
        ],
    ],
}

export default RouteStory
