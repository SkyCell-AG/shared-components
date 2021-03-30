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
        }

        const wrapper = shallow(
            <LineChart {...props} />,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
