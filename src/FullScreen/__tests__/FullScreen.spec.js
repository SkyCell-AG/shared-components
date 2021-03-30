import React from 'react'
import {
    shallow,
} from 'enzyme'

import FullScreen from '../FullScreen'

describe('Apps/shared-components/FullScreen', () => {
    it('FullScreen match snapshot', () => {
        const Children = () => {
            return (<div>children</div>)
        }

        const wrapper = shallow(
            <FullScreen
                className="makeStyles-wrapper-244"
                onFullScreen={jest.fn()}
                setTemperatureChartFullscreen={jest.fn()}
            >
                <Children />
            </FullScreen>,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
