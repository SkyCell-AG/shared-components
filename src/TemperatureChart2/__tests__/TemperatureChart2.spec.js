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
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 11:10',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 11:20',
                },
                {
                    d: [
                        18.1,
                        5.3,
                    ],
                    t: '29.03.2021 11:30',
                },
                {
                    d: [
                        18.1,
                        5.3,
                    ],
                    t: '29.03.2021 11:40',
                },
                {
                    d: [
                        18,
                        5.3,
                    ],
                    t: '29.03.2021 11:50',
                },
                {
                    d: [
                        18,
                        5.3,
                    ],
                    t: '29.03.2021 12:00',
                },
                {
                    d: [
                        18,
                        5.3,
                    ],
                    t: '29.03.2021 12:10',
                },
                {
                    d: [
                        18.1,
                        5.3,
                    ],
                    t: '29.03.2021 12:20',
                },
                {
                    d: [
                        18.1,
                        5.3,
                    ],
                    t: '29.03.2021 12:30',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 12:40',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 12:50',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 13:00',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 13:10',
                },
                {
                    d: [
                        18.3,
                        5.3,
                    ],
                    t: '29.03.2021 13:20',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 13:30',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 13:40',
                },
                {
                    d: [
                        18.3,
                        5.3,
                    ],
                    t: '29.03.2021 13:50',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 14:00',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 14:10',
                },
                {
                    d: [
                        18.1,
                        5.3,
                    ],
                    t: '29.03.2021 14:20',
                },
                {
                    d: [
                        18.1,
                        5.3,
                    ],
                    t: '29.03.2021 14:30',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 14:40',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 14:50',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 15:00',
                },
                {
                    d: [
                        18.3,
                        5.3,
                    ],
                    t: '29.03.2021 15:10',
                },
                {
                    d: [
                        18.3,
                        5.3,
                    ],
                    t: '29.03.2021 15:20',
                },
                {
                    d: [
                        18.3,
                        5.3,
                    ],
                    t: '29.03.2021 15:30',
                },
                {
                    d: [
                        18.3,
                        5.3,
                    ],
                    t: '29.03.2021 15:40',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 15:50',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 16:00',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 16:10',
                },
                {
                    d: [
                        18.1,
                        5.3,
                    ],
                    t: '29.03.2021 16:20',
                },
                {
                    d: [
                        17.9,
                        5.3,
                    ],
                    t: '29.03.2021 16:30',
                },
                {
                    d: [
                        17.8,
                        5.3,
                    ],
                    t: '29.03.2021 16:40',
                },
                {
                    d: [
                        17.8,
                        5.3,
                    ],
                    t: '29.03.2021 16:50',
                },
                {
                    d: [
                        17.9,
                        5.3,
                    ],
                    t: '29.03.2021 17:00',
                },
                {
                    d: [
                        18,
                        5.3,
                    ],
                    t: '29.03.2021 17:10',
                },
                {
                    d: [
                        18.1,
                        5.3,
                    ],
                    t: '29.03.2021 17:20',
                },
                {
                    d: [
                        18.2,
                        5.3,
                    ],
                    t: '29.03.2021 17:30',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 17:40',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 17:50',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 18:00',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 18:10',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 18:20',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 18:30',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '29.03.2021 18:40',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '29.03.2021 18:50',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 19:00',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 19:10',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 19:20',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 19:30',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 19:40',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 19:50',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 20:00',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 20:10',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 20:20',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 20:30',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 20:40',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 20:50',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 21:00',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 21:10',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 21:20',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 21:30',
                },
                {
                    d: [
                        18.3,
                        5.4,
                    ],
                    t: '29.03.2021 21:40',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 21:50',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 22:00',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 22:10',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '29.03.2021 22:20',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '29.03.2021 22:30',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '29.03.2021 22:40',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '29.03.2021 22:50',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '29.03.2021 23:00',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '29.03.2021 23:10',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '29.03.2021 23:20',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '29.03.2021 23:30',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '29.03.2021 23:40',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '29.03.2021 23:50',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '30.03.2021 00:00',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '30.03.2021 00:10',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '30.03.2021 00:20',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '30.03.2021 00:30',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '30.03.2021 00:40',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '30.03.2021 00:50',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '30.03.2021 01:00',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '30.03.2021 01:10',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '30.03.2021 01:20',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 01:30',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 01:40',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 01:50',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 02:00',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 02:10',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 02:20',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 02:30',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 02:40',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 02:50',
                },
                {
                    d: [
                        17.8,
                        5.4,
                    ],
                    t: '30.03.2021 03:00',
                },
                {
                    d: [
                        17.8,
                        5.4,
                    ],
                    t: '30.03.2021 03:10',
                },
                {
                    d: [
                        17.8,
                        5.4,
                    ],
                    t: '30.03.2021 03:20',
                },
                {
                    d: [
                        17.8,
                        5.4,
                    ],
                    t: '30.03.2021 03:30',
                },
                {
                    d: [
                        17.8,
                        5.4,
                    ],
                    t: '30.03.2021 03:40',
                },
                {
                    d: [
                        17.8,
                        5.4,
                    ],
                    t: '30.03.2021 03:50',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 04:00',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 04:10',
                },
                {
                    d: [
                        17.9,
                        5.4,
                    ],
                    t: '30.03.2021 04:20',
                },
                {
                    d: [
                        18,
                        5.4,
                    ],
                    t: '30.03.2021 04:30',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '30.03.2021 04:40',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '30.03.2021 04:50',
                },
                {
                    d: [
                        18.1,
                        5.4,
                    ],
                    t: '30.03.2021 05:00',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '30.03.2021 05:10',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '30.03.2021 05:20',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '30.03.2021 05:30',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '30.03.2021 05:40',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '30.03.2021 05:50',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '30.03.2021 06:00',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '30.03.2021 06:10',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '30.03.2021 06:20',
                },
                {
                    d: [
                        18.2,
                        5.5,
                    ],
                    t: '30.03.2021 06:30',
                },
                {
                    d: [
                        18.2,
                        5.4,
                    ],
                    t: '30.03.2021 06:40',
                },
                {
                    d: [
                        18.2,
                        5.5,
                    ],
                    t: '30.03.2021 06:50',
                },
                {
                    d: [
                        18.1,
                        5.5,
                    ],
                    t: '30.03.2021 07:00',
                },
                {
                    d: [
                        18,
                        5.5,
                    ],
                    t: '30.03.2021 07:10',
                },
                {
                    d: [
                        18,
                        5.5,
                    ],
                    t: '30.03.2021 07:20',
                },
                {
                    d: [
                        17.9,
                        5.5,
                    ],
                    t: '30.03.2021 07:30',
                },
                {
                    d: [
                        17.9,
                        5.5,
                    ],
                    t: '30.03.2021 07:40',
                },
                {
                    d: [
                        17.9,
                        5.5,
                    ],
                    t: '30.03.2021 07:50',
                },
                {
                    d: [
                        17.8,
                        5.5,
                    ],
                    t: '30.03.2021 08:00',
                },
                {
                    d: [
                        17.8,
                        5.5,
                    ],
                    t: '30.03.2021 08:10',
                },
                {
                    d: [
                        17.8,
                        5.5,
                    ],
                    t: '30.03.2021 08:20',
                },
                {
                    d: [
                        17.6,
                        5.5,
                    ],
                    t: '30.03.2021 08:30',
                },
                {
                    d: [
                        17.4,
                        5.5,
                    ],
                    t: '30.03.2021 08:40',
                },
                {
                    d: [
                        17.5,
                        5.5,
                    ],
                    t: '30.03.2021 08:50',
                },
                {
                    d: [
                        17.6,
                        5.5,
                    ],
                    t: '30.03.2021 09:00',
                },
                {
                    d: [
                        17.7,
                        5.5,
                    ],
                    t: '30.03.2021 09:10',
                },
                {
                    d: [
                        17.8,
                        5.5,
                    ],
                    t: '30.03.2021 09:20',
                },
                {
                    d: [
                        17.9,
                        5.5,
                    ],
                    t: '30.03.2021 09:30',
                },
                {
                    d: [
                        17.9,
                        5.5,
                    ],
                    t: '30.03.2021 09:40',
                },
                {
                    d: [
                        18,
                        5.5,
                    ],
                    t: '30.03.2021 09:50',
                },
                {
                    d: [
                        17.9,
                        5.5,
                    ],
                    t: '30.03.2021 10:00',
                },
                {
                    d: [
                        18,
                        5.5,
                    ],
                    t: '30.03.2021 10:10',
                },
                {
                    d: [
                        18,
                        5.5,
                    ],
                    t: '30.03.2021 10:20',
                },
            ]}
        />,
    )

    expect(wrapper).toMatchSnapshot()
})
