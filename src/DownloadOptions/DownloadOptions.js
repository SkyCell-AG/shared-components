import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

import {
    dateToStr,
    dateTimeMask,
} from '../utils/DateUtils'
import downloadDocument from '../utils/downloadDocument'

import Button from '../Button'
import Card from '../Card'
import Radio from '../Radio'
import TemperatureRange from '../TemperatureRange'

import useStyles from './DownloadOptions.style'

const propTypes = {
    showTemperatureRangeOption: PropTypes.bool,
    showPdfButton: PropTypes.bool,
    showCsvButton: PropTypes.bool,
    showTemperatureRangeAllOptions: PropTypes.bool,
    sensorData: PropTypes.arrayOf(PropTypes.any),
    showTempRange: PropTypes.bool.isRequired,
    onCheckShowTempRange: PropTypes.func.isRequired,
    serialNumber: PropTypes.string,
    printChart: PropTypes.func,
    selectedTemperatureRange: PropTypes.string,
    radioOptions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
    })),
    onChangeSelectedTemperatureRange: PropTypes.func,
}

const defaultProps = {
    showTemperatureRangeOption: false,
    showPdfButton: false,
    showCsvButton: false,
    showTemperatureRangeAllOptions: false,
    sensorData: undefined,
    serialNumber: '',
    selectedTemperatureRange: '',
    radioOptions: [],
    printChart: noop,
    onChangeSelectedTemperatureRange: noop,
}

const DownloadOptions = (props) => {
    const classes = useStyles()

    const {
        showTemperatureRangeOption,
        showPdfButton,
        showCsvButton,
        showTemperatureRangeAllOptions,
        serialNumber,
        showTempRange,
        onCheckShowTempRange,
        sensorData,
        printChart,
        selectedTemperatureRange,
        radioOptions,
        onChangeSelectedTemperatureRange,
    } = props

    const exportCsv = useCallback(() => {
        const csvContent = `${sensorData.map((e) => {
            const element = [
                serialNumber,
                dateToStr(e[0], dateTimeMask),
                e[1],
                e[4],
            ]

            return element.join(',')
        }).join('\n')}`

        downloadDocument(
            {
                headers: {
                    'content-type': 'text/csv',
                },
                data: `SERIAL_NUMBER,TIMESTAMP,AMBIENT_TEMPERATURE,INTERNAL_TEMPERATURE\n${csvContent}`,
            },
            `sensor_data_${serialNumber}`,
        )
    }, [
        sensorData,
        serialNumber,
    ])

    return (
        <Card title="Options">
            {showTemperatureRangeOption && (
                <TemperatureRange
                    showTempRange={showTempRange}
                    onCheckShowTempRange={onCheckShowTempRange}
                    title="Temperature Range"
                />
            ) }
            {showTemperatureRangeAllOptions && (
                <Radio
                    className={classes.selectedTemperatureRange}
                    name="selectedTemperatureRange"
                    compact
                    value={selectedTemperatureRange}
                    options={radioOptions}
                    onChange={onChangeSelectedTemperatureRange}
                />
            )}
            <div className={classes.containerBtn}>
                {showPdfButton && (
                    <Button
                        className={classes.btnControl}
                        label="pdf"
                        isUpperCase
                        onClick={printChart}
                    />
                )}
                {showCsvButton && (
                    <Button
                        className={classes.btnControl}
                        label="csv"
                        isUpperCase
                        onClick={exportCsv}
                    />
                )}
            </div>
        </Card>
    )
}

DownloadOptions.propTypes = propTypes
DownloadOptions.defaultProps = defaultProps

export default DownloadOptions
