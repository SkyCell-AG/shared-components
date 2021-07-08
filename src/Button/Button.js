/* eslint-disable complexity */
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
    CircularProgress,
} from '@material-ui/core'
import noop from 'lodash/noop'

import useStyles from './Button.style'

const propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    secondary: PropTypes.bool,
    disabled: PropTypes.bool,
    saving: PropTypes.bool,
    icon: PropTypes.element,
    isUpperCase: PropTypes.bool,
}

const defaultProps = {
    className: '',
    secondary: false,
    disabled: false,
    saving: false,
    icon: null,
    isUpperCase: true,
}

const Button = ({
    label,
    onClick,
    secondary,
    disabled,
    saving,
    icon,
    className,
    isUpperCase,
}) => {
    const classes = useStyles()

    return (
        <div className={clsx(classes.buttonContainer, className)}>
            <div
                data-testid={`button-${label}`}
                className={clsx(!secondary && classes.buttonPrimary,
                    secondary && classes.buttonSecondary,
                    classes.button,
                    disabled && classes.disabled)}
                onMouseDown={disabled ? noop : onClick}
            >
                {saving && (
                    <>
                        <CircularProgress
                            size={16}
                            color="inherit"
                        />
                        &nbsp;
                    </>
                )}
                {icon}
                &nbsp;
                <div className={clsx(
                    isUpperCase && classes.buttonTitleUppercase,
                    classes.buttonTitle,
                )}
                >
                    {label}
                </div>
            </div>
        </div>

    )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
