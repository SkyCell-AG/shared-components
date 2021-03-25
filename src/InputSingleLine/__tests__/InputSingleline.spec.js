import React from 'react'
import {
    shallow,
    mount,
} from 'enzyme'

import InputSingleline from '../InputSingleLineContainer'

describe('shared-components/InputSingleline', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <InputSingleline
                value="Text 234"
                onChange={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('mount correct without data', () => {
        mount(
            <InputSingleline
                onChange={jest.fn()}
            />,
        )
    })
})
