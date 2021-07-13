import React from 'react'
import {
    shallow,
} from 'enzyme'

import Card from '../Card'

it('Card snapshot', () => {
    const wrapper = shallow(
        <Card />,
    )

    expect(wrapper).toMatchSnapshot()
})
