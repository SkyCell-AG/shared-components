import React from 'react'
import {
    shallow,
} from 'enzyme'

import LoadingScreen from '../LoadingScreen'

describe('app/Apps/shared-components/LoadingScreen', () => {
    it('LoadingScreen page snapshot', () => {
        const wrapper = shallow(
            <LoadingScreen />,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
