/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
    shallow,
} from 'enzyme'
import {
    RadioGroup,
} from '@mui/material'

import Radio from '../Radio'

const options = [
    {
        value: 'option1',
        label: 'label1',
    },
    {
        value: 'option2',
        label: 'label2',
    },
]

describe('app/shared-components/Radio should match snapshot 1', () => {
    it('should match snapshot', () => {
        const props = {
            options,
            onChange: jest.fn(),
            title: 'Temperature Range',
            value: 'value',
            disabled: false,
        }
        const wrapper = shallow(
            <Radio
                {...props}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })
    it('should call onChange on radio group selected', () => {
        const onChangeMock = jest.fn()
        const wrapper = shallow(
            <Radio
                onChange={onChangeMock}
                value="option1"
                options={options}
                compact
                required
            />,
        )

        wrapper.find(RadioGroup).props().onChange({
            target: {
                value: 'option2',
            },
        })
        expect(onChangeMock).toBeCalledWith('option2', {
            target: {
                value: 'option2',
            },
        })
    })
})
