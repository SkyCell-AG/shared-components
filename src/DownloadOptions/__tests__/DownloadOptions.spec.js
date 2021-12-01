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
                isContainer
                onCheckShowTempRange={jest.fn()}
            />,
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('Document Print is loaded', (done) => {
        const wrapper = shallow(
            <DownloadOptions
                showPdfButton
                showCsvButton
                showTemperatureRangeOption
                showTemperatureRangeAllOptions
                showTempRange
                serialNumber="031-10279"
                loggerType="SKYCELL_SAVY_BLE"
                sensorData={[[
                    '16.08.2018 06:50',
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
                data: 'SERIAL_NUMBER,TIMESTAMP,AMBIENT_TEMPERATURE,INTERNAL_TEMPERATURE,\n031-10279,16.08.2018 06:50,24.7,21.5',
            }, 'sensor_data_031-10279')
            done()
        })
    })

    it('should generate csv data for more than 1 sensor', (done) => {
        const wrapper = shallow(
            <DownloadOptions
                showCsvButton
                showTempRange
                serialNumber="031-10279"
                loggerType="SKYCELL_SAVY_BLE"
                sensorData={[[
                    '16.08.2018 06:50',
                    24.7,
                    null,
                    null,
                    21.5,
                    null,
                    null,
                    4,
                    null,
                    null,
                ]]}
                otherLoggers={[{
                    value: '000019378', loggerType: 'CARTASENSE',
                }]}
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
                data: 'SERIAL_NUMBER,TIMESTAMP,AMBIENT_TEMPERATURE,INTERNAL_TEMPERATURE,SERIAL_NUMBER,INTERNAL_TEMPERATURE\n031-10279,16.08.2018 06:50,24.7,21.5,000019378,24.7',
            }, 'sensor_data_031-10279')
            done()
        })
    })

    it('should generate csv data for more than 1 sensor of type savy', (done) => {
        const wrapper = shallow(
            <DownloadOptions
                showCsvButton
                showTempRange
                serialNumber="031-10279"
                loggerType="CARTASENSE"
                sensorData={[[
                    '16.08.2018 06:50',
                    24.7,
                    null,
                    null,
                    21.5,
                    null,
                    null,
                    4,
                    null,
                    null,
                ]]}
                otherLoggers={[{
                    value: 'bea4359jer9g9', loggerType: 'SKYCELL_SAVY_BLE',
                }]}
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
                data: 'SERIAL_NUMBER,TIMESTAMP,AMBIENT_TEMPERATURE,INTERNAL_TEMPERATURE,SERIAL_NUMBER,AMBIENT_TEMPERATURE,INTERNAL_TEMPERATURE\n031-10279,16.08.2018 06:50,,24.7,bea4359jer9g9,24.7,21.5',
            }, 'sensor_data_031-10279')
            done()
        })
    })
})
