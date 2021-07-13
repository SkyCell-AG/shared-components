import React from 'react'
import {
    shallow,
    mount,
} from 'enzyme'

import DateRangeSelectorContainer from '../DateRangeSelectorContainer'

describe('shared-components/DateRangeSelectorContainer', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <DateRangeSelectorContainer
                value={{
                    from: '16.08.2020',
                    to: '18.08.2020',
                }}
                onChange={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('renders without crashing', () => {
        mount(
            <DateRangeSelectorContainer
                value={{
                    from: '16.08.2020',
                    to: '18.08.2020',
                }}
            />,
        )
    })
})
