import React from 'react'

import DownloadOptions from 'DownloadOptions'

const DownloadOptionsStory = {
    title: 'DownloadOptions',
    component: DownloadOptions,
}

const Template = (props) => {
    return (
        <DownloadOptions {...props} />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    sensorData: [
        [
            "2021-12-06T22:30",
            -2.2,
            null,
            null,
            -17.2,
            null,
            null,
            -13.5,
            null,
            null,
            -12.7,
            null,
            null,
            -21.5,
            null,
            null
        ],
        [
            "2021-12-06T22:40",
            -2.1,
            null,
            null,
            -17.5,
            null,
            null,
            -13.8,
            null,
            null,
            -12.8,
            null,
            null,
            -21.8,
            null,
            null
        ],
        [
            "2021-12-06T22:50",
            -2.2,
            null,
            null,
            -17.3,
            null,
            null,
            -13.5,
            null,
            null,
            -12.6,
            null,
            null,
            -21.8,
            null,
            null
        ],
        [
            "2021-12-06T23:10",
            -2.5,
            null,
            null,
            -17.2,
            null,
            null,
            -13.5,
            null,
            null,
            -12.6,
            null,
            null,
            -21.8,
            null,
            null
        ],
    ],
    sensorCodes: [
        "AMBIENT_TEMPERATURE",
        "INTERNAL_TEMPERATURE",
        "BACK_TEMPERATURE",
        "AMBIENT_TEMPERATURE",
        "INTERNAL_TEMPERATURE"
    ],
    showCsvButton: true,
    serialNumber: '031-16472',
    loggerType: 'CARTASENSE',
    isContainer: true
}

export default DownloadOptionsStory
