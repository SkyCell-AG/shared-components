import React from 'react'
import {
    shallow,
} from 'enzyme'

import TemperatureChart from '../TemperatureChart'

it('TemperatureChart success', () => {
    const wrapper = shallow(
        <TemperatureChart
            status="SUCCESS"
            sensorData={[
                [
                    new Date('2020-2-13 22:55'),
                    13,
                    null,
                    null,
                    14,
                    null,
                    null,
                ],
                [
                    new Date('2020-2-13 23:5'),
                    13,
                    null,
                    null,
                    11,
                    null,
                    null,
                ],
                [
                    new Date('2020-2-13 23:15'),
                    12,
                    null,
                    null,
                    8,
                    null,
                    null,
                ],
            ]}
        />,
    )

    expect(wrapper).toMatchSnapshot()
})
