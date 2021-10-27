import React from 'react'
import {
    shallow,
} from 'enzyme'
import {
    DatePicker,
} from '@mui/lab'

import DateSelect from '../DateSelect'

describe('shared-components/DateSelect', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <DateSelect
                value="10.06.2018"
                onChange={jest.fn()}
                name="from"
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('should create date when change', () => {
        const onChange = jest.fn()
        const date = '2018-06-10T16:04:00.000Z'

        const wrapper = shallow(
            <DateSelect
                value="10.06.2018"
                onChange={onChange}
                name="from"
            />,
        )

        const child = wrapper.find(DatePicker)

        child.at(0).props().onChange(
            date, {
                target: {
                    name: 'from',
                    value: date,
                },
            },
        )
        expect(onChange).toHaveBeenCalledWith(
            new Date('2018-06-10T00:00:00.000Z'), {
                target: {
                    name: 'from',
                    value: 1528588800000,
                },
            },
        )
    })

    it('should set hour to 23:59 when called "to"', () => {
        const onChange = jest.fn()
        const date = '2018-06-10T16:04:00.000Z'

        const wrapper = shallow(
            <DateSelect
                value="10.06.2018"
                onChange={onChange}
                name="to"
            />,
        )

        const child = wrapper.find(DatePicker)

        child.at(0).props().onChange(
            date, {
                target: {
                    name: 'to',
                    value: date,
                },
            },
        )
        expect(onChange).toHaveBeenCalledWith(
            new Date('2018-06-10T23:59:59.000Z'), {
                target: {
                    name: 'to',
                    value: 1528675199000,
                },
            },
        )
    })
})
