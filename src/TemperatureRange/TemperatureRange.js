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
        <div>
            <Checkbox
                value={showTempRange}
                onChange={(event) => {
                    onCheckShowTempRange(event)
                }}
                title={title}
            />
        </div>
    )
}

TemperatureRange.propTypes = propTypes

export default TemperatureRange
