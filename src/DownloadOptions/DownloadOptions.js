import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

import {
    dateToStr,
    dateTimeMask,
} from '../utils/Date'
import downloadDocument from '../utils/downloadDocument'

import Button from '../Button'
import Card from '../Card'
import TemperatureRange from '../TemperatureRange'

import useStyles from './DownloadOptions.style'

const propTypes = {
    showTemperatureRangeOption: PropTypes.bool,
    showPdfButton: PropTypes.bool,
    showCsvButton: PropTypes.bool,
    sensorData: PropTypes.arrayOf(PropTypes.any),
    showTempRange: PropTypes.bool.isRequired,
    onCheckShowTempRange: PropTypes.func.isRequired,
    serialNumber: PropTypes.string,
    printChart: PropTypes.func,
}

const defaultProps = {
    showTemperatureRangeOption: false,
    showPdfButton: false,
    showCsvButton: false,
    sensorData: undefined,
    serialNumber: '',
    printChart: noop,
}

const DownloadOptions = (props) => {
    const classes = useStyles()

    const {
        showTemperatureRangeOption,
        showPdfButton,
        showCsvButton,
        serialNumber,
        showTempRange,
        onCheckShowTempRange,
        sensorData,
        printChart,
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
