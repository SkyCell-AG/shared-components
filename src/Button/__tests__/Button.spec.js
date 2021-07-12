import React from 'react'
import {
    shallow,
} from 'enzyme'

import Button from '../Button'

describe('Button', () => {
    it('Button snapshot', () => {
        const wrapper = shallow(
            <Button />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('Button secondary snapshot', () => {
        const wrapper = shallow(
            <Button
                secondary
                disabled
                saving
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
