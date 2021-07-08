import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '../Checkbox'

import useStyles from './TemperatureRange.styles'

const propTypes = {
    showTempRange: PropTypes.bool.isRequired,
    onCheckShowTempRange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}

const defaultProps = {}

const TemperatureRange = (props) => {
    const {
        showTempRange,
        onCheckShowTempRange,
        title,
    } = props

    const classes = useStyles()

    return (
        <div className={classes.root}>
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
TemperatureRange.defaultProps = defaultProps

export default TemperatureRange
