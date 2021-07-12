import React from 'react'
import {
    shallow,
} from 'enzyme'

import Button from '../Button'

it('Button snapshot', () => {
    const wrapper = shallow(
        <Button />,
    )

    expect(wrapper).toMatchSnapshot()
})
