import React, {
    useCallback,
    useMemo,
} from 'react'
import {
    TextField,
    FormControl,
    FormHelperText,
} from '@mui/material'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import noop from 'lodash/noop'

import Label from 'Label'
import filterFieldForInput from 'utils/filterFieldForInput'

import useStyles from './InputSingleLine.styles'

const propTypes = {
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    classNames: PropTypes.shape({
        textField: PropTypes.string,
    }),
    title: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    hasError: PropTypes.string,
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
    fullHeight: PropTypes.bool,
    rightAligned: PropTypes.bool,
    hideUnderline: PropTypes.bool,
    suffix: PropTypes.string,
}

const defaultProps = {
    onChange: noop,
    onKeyPress: noop,
    onBlur: noop,
    className: '',
    classNames: {},
    title: '',
    value: '',
    disabled: false,
    required: false,
    type: 'text',
    hasError: '',
    fullWidth: false,
    fullHeight: false,
    rightAligned: false,
    hideUnderline: false,
    suffix: '',
}

const InputSingleLine = (props) => {
    const classes = useStyles()
    const {
        title,
        required,
        disabled,
        hasError,
        onChange,
        onBlur,
        onKeyPress,
        className,
        classNames,
        fullHeight,
        rightAligned,
        suffix,
        value,
        type,
        hideUnderline,
    } = props

    const defineValue = useCallback((newValue) => {
        if (type === 'number') {
            return newValue ? Number(newValue) : undefined
        }

        return newValue
    }, [type])

    const handleChange = useCallback(({
        target,
    }) => {
        const {
            value: newValue,
            name,
        } = target

        onChange(newValue, {
            target: {
                name,
                value: defineValue(newValue),
            },
        })
    }, [
        defineValue,
        onChange,
    ])

    const inputProps = useMemo(() => {
        return {
            classes: {
                input: clsx({
                    [classes.input]: true,
                    [classes.rightAligned]: rightAligned,
                    [classes.isRequired]: required && !disabled,
                    [classes.fullHeight]: fullHeight,
                    [classes.disabled]: disabled,
                    [classes.withoutUnderline]: hideUnderline,
                }),
                root: clsx({
                    [classes.fullHeight]: fullHeight,
                }),
                underline: clsx({
                    [classes.disabledUnderline]: disabled,
                    [classes.hideUnderline]: hideUnderline,
                }),
            },
            onBlur,
        }
    }, [
        hideUnderline,
        classes.withoutUnderline,
        classes.hideUnderline,
        classes.disabled,
        classes.disabledUnderline,
        classes.fullHeight,
        classes.input,
        classes.isRequired,
        classes.rightAligned,
        disabled,
        fullHeight,
        onBlur,
        required,
        rightAligned,
    ])

    if (disabled) {
        return (
            <div className={className}>
                <Label
                    title={title}
                    className={className.label}
                />
                <p
                    className={clsx(classes.text, className.text)}
                >
                    {value}
                </p>
            </div>
        )
    }

    return (
        <FormControl
            error={Boolean(hasError)}
            className={clsx(classes.formControl, className)}
        >
            <Label
                title={title}
                hasError={hasError}
            />
            <div
                className={clsx(
                    {
                        [classes.textField]: true,
                        [classes.disabled]: disabled,
                        [classes.fullHeightTextField]: fullHeight,
                    },
                )}
            >
                {(required && !disabled) && <div className={classes.requiredMark} />}
                <TextField
                    {...filterFieldForInput(props)}
                    onChange={handleChange}
                    onKeyPress={onKeyPress}
                    InputProps={inputProps}
                    className={clsx(classNames.textField, {
                        [classes.inputControl]: true,
                        [classes.fullHeight]: fullHeight,
                    })}
                    disabled={disabled}
                    fullWidth
                />
                {
                    suffix && (
                        <div className={classes.inputMeasure}>
                            <span className={classes.inputMeasureValue}>{value}</span>
                            <span>{suffix}</span>
                        </div>
                    )
                }

                <FormHelperText
                    error={Boolean(hasError)}
                    className={classes.errorMessage}
                >
                    {hasError}
                </FormHelperText>
            </div>
        </FormControl>
    )
}

InputSingleLine.propTypes = propTypes
InputSingleLine.defaultProps = defaultProps

export default InputSingleLine
