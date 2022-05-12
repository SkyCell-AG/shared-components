import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

import downloadDocument from '../utils/downloadDocument'

import Button from '../Button'
import Card from '../Card'

import useStyles from './DownloadOptions.style'

const propTypes = {
    showPdfButton: PropTypes.bool,
    showCsvButton: PropTypes.bool,
    sensorData: PropTypes.arrayOf(PropTypes.any),
    sensorCodes: PropTypes.arrayOf(PropTypes.any),
    serialNumber: PropTypes.string,
    printChart: PropTypes.func,
    isContainer: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node,
}

const defaultProps = {
    showPdfButton: false,
    showCsvButton: false,
    sensorData: undefined,
    sensorCodes: undefined,
    serialNumber: '',
    printChart: noop,
    isContainer: false,
    children: undefined,
    title: 'Options',
}

const DownloadOptions = ({
    showPdfButton,
    showCsvButton,
    serialNumber,
    sensorData,
    sensorCodes,
    printChart,
    isContainer,
    title,
    children,
}) => {
    const classes = useStyles()

    const exportCsv = useCallback(() => {
        const csvContent = `${sensorData.map((sensorDataElement) => {
            const csvArray = [
                isContainer ? serialNumber : undefined,
                ...sensorDataElement,
            ].filter(Boolean)

            return csvArray.join(',')
        }).join('\n')}`

        const baseColumns = [
            isContainer ? 'SERIAL_NUMBER' : undefined,
            'TIMESTAMP',
            ...sensorCodes,
        ].filter(Boolean).join(',')

        downloadDocument(
            {
                headers: {
                    'content-type': 'text/csv',
                },
                data: `${baseColumns}\n${csvContent}`,
            },
            `sensor_data_${serialNumber}`,
        )
    }, [
        sensorData,
        sensorCodes,
        serialNumber,
        isContainer,
    ])

    return (
        <Card title={title}>
            {children}
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
