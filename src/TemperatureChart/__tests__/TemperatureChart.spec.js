import React from 'react'
import {
    shallow,
} from 'enzyme'

import {
    VictoryAxis,
} from 'victory'

import TemperatureChart from '../TemperatureChart'

describe('TemperatureChart', () => {
    it('TemperatureChart success', () => {
        const wrapper = shallow(
            <TemperatureChart
                containerSensorData={{
                    data: [
                        {
                            d: [
                                2,
                                20,
                            ],
                            t: '03.12.2021 09:10:00',
                        },
                        {
                            d: [
                                3,
                                52,
                            ],
                            t: '03.12.2021 09:20:00',

                        },
                        {
                            d: [
                                1,
                                32,
                            ],
                            t: '03.12.2021 09:30:00',
                        },
                    ],
                }}
                energyLevel={[
                    100,
                    98,
                    96,
                ]}
                excursion="2021-12-03T09:20"
                upperTempBound={8}
                lowerTempBound={2}
                width={1300}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('Should not render energyLevel if energyLevel undefined', () => {
        const wrapper = shallow(
            <TemperatureChart
                containerSensorData={{
                    data: [
                        {
                            d: [
                                2,
                                20,
                            ],
                            t: '03.12.2021 09:10:00',
                        },
                        {
                            d: [
                                3,
                                52,
                            ],
                            t: '03.12.2021 09:20:00',

                        },
                        {
                            d: [
                                1,
                                32,
                            ],
                            t: '03.12.2021 09:30:00',
                        },
                    ],
                }}
                excursion="2021-12-03T09:20"
                upperTempBound={8}
                lowerTempBound={2}
                width={1300}
            />,
        )

        expect(wrapper.find('[data-testid="energyLevelAxis"]').exists()).toEqual(false)
        expect(wrapper.find('[data-testid="energyLevelLine"]').exists()).toEqual(false)
    })

    it('Should not render excursion if excursion undefined', () => {
        const wrapper = shallow(
            <TemperatureChart
                containerSensorData={{
                    data: [
                        {
                            d: [
                                2,
                                20,
                            ],
                            t: '03.12.2021 09:10:00',
                        },
                        {
                            d: [
                                3,
                                52,
                            ],
                            t: '03.12.2021 09:20:00',

                        },
                        {
                            d: [
                                1,
                                32,
                            ],
                            t: '03.12.2021 09:30:00',
                        },
                    ],
                }}
                upperTempBound={8}
                lowerTempBound={2}
                width={1300}
            />,
        )

        expect(wrapper.find('[data-testid="excursionAxis"]').exists()).toEqual(false)
    })

    it('tickFormat function returns the right data', () => {
        const wrapper = shallow(
            <TemperatureChart
                containerSensorData={{
                    data: [
                        {
                            d: [
                                2,
                                20,
                            ],
                            t: '03.12.2021 09:10:00',
                        },
                        {
                            d: [
                                3,
                                52,
                            ],
                            t: '03.12.2021 09:20:00',

                        },
                        {
                            d: [
                                1,
                                32,
                            ],
                            t: '03.12.2021 09:30:00',
                        },
                    ],
                }}
                energyLevel={[
                    100,
                    98,
                    96,
                ]}
                excursion="2021-12-03T09:20"
                upperTempBound={8}
                lowerTempBound={2}
                width={1300}
            />,
        )

        const child = wrapper.find(VictoryAxis)

        expect(child.at(0).props().tickFormat('3/11/2021 9:10')).toEqual('3/11/2021 9:10')
    })
})
