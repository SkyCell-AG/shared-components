import React from 'react'
import {
    shallow,
} from 'enzyme'

import downloadDocument from '../../utils/downloadDocument'

import DownloadOptions from '../DownloadOptions'

jest.mock('../../utils/downloadDocument')

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
                showTemperatureRangeAllOptions
                showTempRange
                onCheckShowTempRange={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('Document Print is loaded', (done) => {
        const wrapper = shallow(
            <DownloadOptions
                showCsvButton
                showTempRange
                serialNumber="031-10279"
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

        wrapper.find({
            label: 'csv',
        }).prop('onClick')()

        setTimeout(() => {
            expect(downloadDocument).toHaveBeenCalledWith({
                headers: {
                    'content-type': 'text/csv',
                },
                data: 'SERIAL_NUMBER,TIMESTAMP,AMBIENT_TEMPERATURE,INTERNAL_TEMPERATURE\n031-10279,16.08.2018 06:50,24.7,21.5',
            }, 'sensor_data_031-10279')
            done()
        })
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
