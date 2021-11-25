import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '../Checkbox'

const propTypes = {
    showTempRange: PropTypes.bool.isRequired,
    onCheckShowTempRange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

const TemperatureRange = (props) => {
    const {
        showTempRange,
        onCheckShowTempRange,
        title,
        name,
    } = props

    return (
        <Checkbox
            value={showTempRange}
            onChange={(event) => {
                onCheckShowTempRange(event)
            }}
            title={title}
            name={name}
        />
    )
}

TemperatureRange.propTypes = propTypes

export default TemperatureRange
