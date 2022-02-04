import React from 'react'
import {
    shallow,
} from 'enzyme'

import dayPassedToRange from 'utils/DateUtils/dayPassedToRange'

import DateRangeSelectorContainer from '../DateRangeSelectorContainer'
import DateRangeSelector from '../DateRangeSelector'

jest.mock('utils/DateUtils/dayPassedToRange', () => {
    return jest.fn()
})

describe('shared-components/DateRangeSelectorContainer', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <DateRangeSelectorContainer
                setDateRange={jest.fn()}
                value={{
                    from: new Date(2020, 8, 16).getTime(),
                    to: new Date(2020, 8, 18).getTime(),
                }}
                onChange={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('onChange', () => {
        const onChange = jest.fn()
        const setRange = jest.fn()

        const initValue = {
            from: new Date(2020, 8, 16).setHours(0, 0, 0),
            to: new Date(2020, 8, 18).setHours(23, 59, 59),
        }

        const wrapper = shallow(<DateRangeSelectorContainer
            setDateRange={setRange}
            onChange={onChange}
            value={initValue}
        />)
            .find(DateRangeSelector)

        const newFrom = new Date(2020, 8, 19).setHours(0, 0, 0)

        wrapper.props().onChangeRange(null, {
            target: {
                name: 'from',
                value: newFrom,
            },
        })

        const newValue = {
            ...initValue,
            from: newFrom,
        }

        expect(onChange).toBeCalledWith(newValue, {
            name: 'from',
            value: {
                from: newFrom,
                to: initValue.to,
            },
        })
        expect(setRange).toBeCalledWith(true)
    })

    it('on select option', () => {
        dayPassedToRange.mockReturnValue({
            from: 'from',
            to: 'to',
        })
        const onChange = jest.fn()
        const setRange = jest.fn()

        const initValue = {
            from: new Date(2020, 8, 16).setHours(0, 0, 0),
            to: new Date(2020, 8, 18).setHours(23, 59, 59),
        }

        const wrapper = shallow(<DateRangeSelectorContainer
            setDateRange={setRange}
            onChange={onChange}
            value={initValue}
        />)
            .find(DateRangeSelector)

        wrapper.props().selectOption('24h')

        expect(dayPassedToRange).toBeCalledWith('24h')
        expect(onChange).toBeCalledWith({
            from: 'from',
            to: 'to',
        })
        expect(setRange).toBeCalledWith(false)
    })
})
