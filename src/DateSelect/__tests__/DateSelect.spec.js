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
                setDateRange={jest.fn()}
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
                setDateRange={jest.fn()}
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
            new Date('2018-06-10T16:04:00.000Z'), {
                target: {
                    name: 'from',
                    value: new Date('2018-06-10T16:04:00.000Z'),
                },
            },
        )
    })

    it('should return null when called with null date', () => {
        const onChange = jest.fn()
        // const date = '2018-06-10T16:04:00.000Z'

        const wrapper = shallow(
            <DateSelect
                value="10.06.2018"
                onChange={onChange}
                name="to"
                setDateRange={jest.fn()}
            />,
        )

        const child = wrapper.find(DatePicker)

        child.at(0).props().onChange(
            null, {
                target: {
                    name: 'to',
                    value: null,
                },
            },
        )
        expect(onChange).toHaveBeenCalledWith(
            null, {
                target: {
                    name: 'to',
                    value: null,
                },
            },
        )
    })
})
