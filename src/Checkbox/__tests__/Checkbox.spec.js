import React from 'react'
import {
    shallow,
    mount,
} from 'enzyme'
import {
    Checkbox as MaterialCheckbox,
} from '@material-ui/core'

import Checkbox from '../Checkbox'

describe('Checkbox', () => {
    it('Checkbox snapshot', () => {
        const wrapper = shallow(
            <Checkbox />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('should call onChange on click', () => {
        const onChangeMock = jest.fn()
        const wrapper = mount(
            <Checkbox
                onChange={onChangeMock}
                name="test-checkBox"
            />,
        )

        wrapper.find(MaterialCheckbox).props().onChange()
        expect(onChangeMock).toBeCalledWith(true, {
            target: {
                value: true,
                name: 'test-checkBox',
            },
        })
    })
})
