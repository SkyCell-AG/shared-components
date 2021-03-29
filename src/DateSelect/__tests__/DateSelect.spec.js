import React from 'react'
import {
    shallow,
} from 'enzyme'

import DateSelect from '../DateSelect'

describe('shared-components/DateSelect', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <DateSelect
                value="26.06.2020"
                onChange={jest.fn()}
                name="validFrom"
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
