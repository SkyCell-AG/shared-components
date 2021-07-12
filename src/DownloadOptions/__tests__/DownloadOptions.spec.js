import React from 'react'
import {
    shallow,
} from 'enzyme'

import DownloadOptions from '../DownloadOptions'

describe('shared-components/DownloadOptions', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(
            <DownloadOptions
                showTempRange
                onCheckShowTempRange={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
