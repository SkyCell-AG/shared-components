import React, {
    useEffect,
} from 'react'
import {
    shallow,
} from 'enzyme'
import DayPicker from 'react-day-picker'

import DateRangeSelector from '../DateRangeSelector'

jest.mock('react', () => {
    return {
        ...jest.requireActual('react'),
        useEffect: jest.fn(),
    }
})

describe('shared-components/DateRangeSelector', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

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
            />,
        )

        useEffect.mock.calls.forEach(([cb]) => {
            cb()
        })

        expect(wrapper).toMatchSnapshot()
    })

    it('should select editing date', () => {
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
                showTimeRange
                selectOption={jest.fn()}
                onChangeRange={jest.fn()}
                from="16.08.2020"
                to="18.08.2020"
            />,
        )

        useEffect.mock.calls.forEach(([cb]) => {
            return cb()
        })

        wrapper.find('[data-testid="daypicker-input"]').simulate('click')

        expect(wrapper.find('[data-testid="daypicker-input"]').childAt(0).prop('className')).toMatch(/editedDate/)
        expect(wrapper.find('[data-testid="daypicker-input"]').childAt(2).prop('className')).toBeFalsy()

        wrapper.find(DayPicker).props().onDayClick(
            new Date('2020-08-13T00:00:00'),
            {
                disabled: false,
            },
        )
        expect(wrapper.find('[data-testid="daypicker-input"]').childAt(2).prop('className')).toMatch(/editedDate/)
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
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('should change date range', () => {
        const selectOption = jest.fn()

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
                selectOption={selectOption}
                showTimeRange
                onChangeRange={jest.fn()}
                from="16.08.2020"
                to="18.08.2020"
            />,
        )

        wrapper.find('[data-testid="date-range-button-1"]').simulate('mousedown')

        expect(selectOption).toBeCalledWith(1)
    })
})
