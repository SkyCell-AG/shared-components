import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

import {
    CircularProgress,
} from '@material-ui/core'

import useStyles from './Loading.styles'

const propTypes = {
    className: PropTypes.string,
}

const defaultProps = {
    className: '',
}

const Loading = (props) => {
    const {
        className,
    } = props

    const classes = useStyles()

    return (
        <div className={clsx(classes.wrapper, className)}>
            <CircularProgress {...props} />
        </div>
    )
}

Loading.propTypes = propTypes
Loading.defaultProps = defaultProps

export default Loading
