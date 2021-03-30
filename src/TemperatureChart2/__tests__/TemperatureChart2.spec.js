import React from 'react'
import {
    shallow,
} from 'enzyme'

import TemperatureChart2 from '../TemperatureChart2'

it('TemperatureChart success', () => {
    const wrapper = shallow(
        <TemperatureChart2
            sensorData={[
                {
                    d: [
                        18.1,
                        5.3,
                    ],
                    t: '29.03.2021 10:40',
                },
                {
                    d: [
                        18.1,
                        5.3,
                    ],
                    t: '29.03.2021 10:50',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 11:00',
                },
            ]}
        />,
    )

    expect(wrapper).toMatchSnapshot()
})
