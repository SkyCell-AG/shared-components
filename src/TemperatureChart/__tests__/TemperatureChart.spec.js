import React from 'react'
import {
    shallow,
} from 'enzyme'

import TemperatureChart from '../TemperatureChart'

it('TemperatureChart success', () => {
    const wrapper = shallow(
        <TemperatureChart
            ambient={[
                20,
                52,
                32,
            ]}
            simulated={[
                2,
                3,
                1,
            ]}
            energyLevel={[
                100,
                98,
                96,
            ]}
            excursion={4}
            upperTempBound={8}
            lowerTempBound={2}
        />,
    )

    expect(wrapper).toMatchSnapshot()
})
