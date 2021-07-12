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

    it('should match snapshot with all buttons', () => {
        const wrapper = shallow(
            <DownloadOptions
                showPdfButton
                showCsvButton
                showTemperatureRangeOption
                showTempRange
                onCheckShowTempRange={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('should generate csv data', () => {
        const wrapper = shallow(
            <DownloadOptions
                showCsvButton
                showTempRange
                sensorData={[[
                    new Date('August 16, 2018 06:50:00'),
                    24.7,
                    null,
                    null,
                    21.5,
                    null,
                    null,
                ]]}
                onCheckShowTempRange={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })
})
