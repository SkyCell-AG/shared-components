import React, {
    useMemo,
} from 'react'
import {
    Typography,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
    useTheme,
} from '@material-ui/core/styles'

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
    const theme = useTheme()
    const classes = useStyles(theme)

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
