import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

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
    loggerType: PropTypes.string,
    printChart: PropTypes.func,
    selectedTemperatureRange: PropTypes.string,
    radioOptions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
    })),
    onChangeSelectedTemperatureRange: PropTypes.func,
    otherLoggers: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        loggerType: PropTypes.string,
    })),
    isContainer: PropTypes.bool,
}

const defaultProps = {
    showTemperatureRangeOption: false,
    showPdfButton: false,
    showCsvButton: false,
    showTemperatureRangeAllOptions: false,
    sensorData: undefined,
    serialNumber: '',
    loggerType: '',
    selectedTemperatureRange: '',
    radioOptions: [],
    otherLoggers: [],
    printChart: noop,
    onChangeSelectedTemperatureRange: noop,
    isContainer: false,
}

const DownloadOptions = (props) => {
    const classes = useStyles()

    const {
        showTemperatureRangeOption,
        showPdfButton,
        showCsvButton,
        showTemperatureRangeAllOptions,
        serialNumber,
        loggerType,
        showTempRange,
        onCheckShowTempRange,
        sensorData,
        printChart,
        selectedTemperatureRange,
        radioOptions,
        otherLoggers,
        onChangeSelectedTemperatureRange,
        isContainer,
    } = props

    const exportCsv = useCallback(() => {
        const csvContent = `${sensorData.map((e) => {
            let pushedRows = 0
            const csvArray = [
                serialNumber,
                e[0],
                (loggerType === 'SKYCELL_SAVY_BLE' || isContainer) && e[1],
                (loggerType === 'CARTASENSE') ? e[1] : e[4],
                ...otherLoggers.map((element) => {
                    let result = e[3 * pushedRows + 1]

                    let pushedRowsIncrement = 1

                    if (element.loggerType === 'SKYCELL_SAVY_BLE') {
                        result = [
                            e[3 * pushedRows + 1],
                            e[3 * (pushedRows + 1) + 1],
                        ]

                        pushedRowsIncrement = 2
                    }

                    pushedRows += pushedRowsIncrement
                    return [
                        element.value,
                        result,
                    ]
                }).flat(2),
            ]

            return csvArray.join(',')
        }).join('\n')}`

        const baseColumns = 'SERIAL_NUMBER,TIMESTAMP,AMBIENT_TEMPERATURE,INTERNAL_TEMPERATURE'

        const columns = otherLoggers.reduce((acc, curr) => {
            if (curr.loggerType === 'SKYCELL_SAVY_BLE') {
                return `${acc},SERIAL_NUMBER,AMBIENT_TEMPERATURE,INTERNAL_TEMPERATURE`
            }
            return `${acc},SERIAL_NUMBER,INTERNAL_TEMPERATURE`
        }, baseColumns)

        downloadDocument(
            {
                headers: {
                    'content-type': 'text/csv',
                },
                data: `${columns}\n${csvContent}`,
            },
            `sensor_data_${serialNumber}`,
        )
    }, [
        sensorData,
        otherLoggers,
        serialNumber,
        loggerType,
        isContainer,
    ])

    return (
        <Card title="Options">
            {showTemperatureRangeOption && (
                <TemperatureRange
                    name="temperatureRange"
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
