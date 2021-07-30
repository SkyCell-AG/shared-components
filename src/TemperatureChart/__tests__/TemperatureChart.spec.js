import React from 'react'
import {
    shallow,
    mount,
} from 'enzyme'

import TemperatureChart from '../TemperatureChart'

jest.mock('victory', () => {
    return {
        VictoryLine: () => { return <div>VictoryLine</div> },
        VictoryChart: () => { return <div>VictoryChart</div> },
        VictoryAxis: () => { return <div>VictoryAxis</div> },
        LineSegment: () => { return <div>LineSegment</div> },
        VictoryLabel: () => { return <div>VictoryLabel</div> },
    }
})

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
                excursion={4}
                upperTempBound={8}
                lowerTempBound={2}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('Should not render energyLevel if energyLevel undefined', () => {
        const wrapper = mount(
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
                excursion={4}
                upperTempBound={8}
                lowerTempBound={2}
            />,
        )

        expect(wrapper.find('[data-testid="energyLevelAxis"]').exists()).toEqual(false)
        expect(wrapper.find('[data-testid="energyLevelLine"]').exists()).toEqual(false)
    })

    it('Should not render excursion if excursion undefined', () => {
        const wrapper = mount(
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
            />,
        )

        expect(wrapper.find('[data-testid="excursionAxis"]').exists()).toEqual(false)
    })
})
