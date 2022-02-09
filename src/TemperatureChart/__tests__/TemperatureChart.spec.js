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
                temperatureTimeAxis={[
                    '2021-12-03T09:10',
                    '2021-12-03T09:20',
                    '2021-12-03T09:30',
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
                temperatureTimeAxis={[
                    '2021-12-03T09:10',
                    '2021-12-03T09:20',
                    '2021-12-03T09:30',
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
