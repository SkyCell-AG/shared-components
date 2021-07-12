import React from 'react'
import {
    shallow,
} from 'enzyme'

import TemperatureRange from '../TemperatureRange'

describe('shared-components/TemperatureRange', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <TemperatureRange
                showTempRange
                onCheckShowTempRange={jest.fn()}
                title="Show Temperature Range"
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
