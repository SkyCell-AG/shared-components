import React from 'react'
import {
    shallow,
} from 'enzyme'

import Checkbox from '../Checkbox'

it('Checkbox snapshot', () => {
    const wrapper = shallow(
        <Checkbox />,
    )

    expect(wrapper).toMatchSnapshot()
})
