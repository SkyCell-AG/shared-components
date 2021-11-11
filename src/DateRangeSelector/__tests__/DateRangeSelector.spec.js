import React from 'react'
import {
    shallow,
    mount,
} from 'enzyme'

import DateRangeSelector from '../DateRangeSelector'

describe('shared-components/DateRangeSelector', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <DateRangeSelector
                options={[
                    {
                        label: '24h',
                        value: 1,
                    },
                    {
                        label: '7d',
                        value: 7,
                    },
                    {
                        label: '14d',
                        value: 14,
                    },
                ]}
                selectOption={jest.fn()}
                onChangeRange={jest.fn()}
                from="16.08.2020"
                to="18.08.2020"
                setDateRange={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('should show time range', () => {
        const wrapper = shallow(
            <DateRangeSelector
                options={[
                    {
                        label: '24h',
                        value: 1,
                    },
                    {
                        label: '7d',
                        value: 7,
                    },
                    {
                        label: '14d',
                        value: 14,
                    },
                ]}
                selectOption={jest.fn()}
                showTimeRange
                onChangeRange={jest.fn()}
                from="16.08.2020"
                to="18.08.2020"
                setDateRange={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('renders without crashing', () => {
        mount(
            <DateRangeSelector
                selectOption={jest.fn()}
                onChangeRange={jest.fn()}
                from="16.08.2020"
                to="18.08.2020"
                setDateRange={jest.fn()}
            />,
        )
    })
})
