/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
    shallow,
} from 'enzyme'

import BarcodeReader from '../BarcodeReader'

describe('BarcodeReader', () => {
    it('should match snapshot', () => {
        const props = {
            onChange: jest.fn(),
            label: 'barcode',
            skipButton: () => { return (<span>test</span>) },
            onSubmit: jest.fn(),
        }

        const wrapper = shallow(
            <BarcodeReader
                {...props}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
