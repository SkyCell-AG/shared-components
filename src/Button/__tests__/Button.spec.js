import React from 'react'
import {
    shallow,
} from 'enzyme'

import Button from '../Button'

describe('Button', () => {
    it('Button snapshot', () => {
        const wrapper = shallow(
            <Button
                label="TEST"
                onClick={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('Button secondary snapshot', () => {
        const wrapper = shallow(
            <Button
                label="TEST"
                onClick={jest.fn()}
                secondary
                disabled
                saving
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
