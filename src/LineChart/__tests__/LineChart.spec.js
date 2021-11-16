import React from 'react'
import {
    shallow,
} from 'enzyme'

import LineChart from '../LineChart'

describe('app/Apps/shared-components/LineChart', () => {
    it('LineChart page snapshot', () => {
        const props = {
            columns: [[
                'number',
                'Temperature Range Minimum',
            ]],
            onError: jest.fn(),
            isDateRange: true,
        }

        const wrapper = shallow(
            <LineChart {...props} />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('Test', () => {
        const props = {
            columns: [[
                'number',
                'Temperature Range Minimum',
            ]],
            onError: jest.fn(),
            isDateRange: false,
        }

        const wrapper = shallow(
            <LineChart {...props} />,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
