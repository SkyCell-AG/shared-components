import React, {
    useMemo,
} from 'react'
import {
    Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import useStyles from './Label.style'

const propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    hasError: PropTypes.string,
}

const defaultProps = {
    className: '',
    hasError: '',
}

const Label = ({
    title,
    className,
    hasError,
}) => {
    const classes = useStyles()

    const typographyProps = useMemo(() => {
        const tProps = {
            className: clsx(classes.label, className),
        }

        if (hasError) {
            tProps.color = 'error'
        }

        return tProps
    }, [
        className,
        classes.label,
        hasError,
    ])

    return (
        <Typography
            {...typographyProps}
            variant="caption"
        >
            {title}
        </Typography>
    )
}

Label.propTypes = propTypes
Label.defaultProps = defaultProps

export default Label
