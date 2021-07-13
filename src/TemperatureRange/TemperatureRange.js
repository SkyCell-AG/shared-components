import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '../Checkbox'

const propTypes = {
    showTempRange: PropTypes.bool.isRequired,
    onCheckShowTempRange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

const TemperatureRange = (props) => {
    const {
        showTempRange,
        onCheckShowTempRange,
        title,
    } = props

    return (
        <Checkbox
            value={showTempRange}
            onChange={(event) => {
                onCheckShowTempRange(event)
            }}
            title={title}
        />
    )
}

TemperatureRange.propTypes = propTypes

export default TemperatureRange
