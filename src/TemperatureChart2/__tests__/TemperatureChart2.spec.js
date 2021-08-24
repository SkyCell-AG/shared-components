import React from 'react'
import {
    shallow,
} from 'enzyme'

import FullScreen from 'FullScreen'
import LineChart from 'LineChart'
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

it('TemperatureChart no fullscreen button', () => {
    const wrapper = shallow(
        <TemperatureChart2
            allowFullScreen={false}
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

    expect(
        wrapper.find(FullScreen).length,
    ).toEqual(0)
    expect(
        wrapper.find(LineChart).length,
    ).toEqual(1)
})
