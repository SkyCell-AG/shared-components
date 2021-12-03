import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import {
    FormHelperText,
    TextField,
} from '@mui/material'
import {
    DatePicker,
} from '@mui/lab'
import {
    useTheme,
} from '@mui/material/styles'
import clsx from 'clsx'

import Label from 'Label'

import {
    strToDate,
} from 'utils/DateUtils'

import useStyles from './DateSelect.styles'

const propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    hasError: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    value: PropTypes.string,
    className: PropTypes.string,
}

const defaultProps = {
    title: '',
    name: '',
    hasError: '',
    disabled: false,
    required: false,
    value: null,
    className: '',
}

const DateSelect = (props) => {
    const theme = useTheme()
    const classes = useStyles(theme)
    const {
        title,
        name,
        hasError,
        onChange,
        value,
        disabled,
        required,
        className,
    } = props

    const handleOnChange = useCallback((date) => {
        const newValue = new Date(date)

        onChange(newValue, {
            target: {
                name,
                value: name === 'from' ? new Date(newValue.setHours(0, 0, 0)) : new Date(newValue.setHours(23, 59, 59)),
            },
        })
    }, [
        name,
        onChange,
    ])

    return (
        <div className={className}>
            <Label
                title={title}
                hasError={hasError}
            />
            <div
                className={clsx(
                    classes.dateField,
                    {
                        [classes.disabled]: disabled,
                        [classes.isRequired]: required,
                    },
                )}
            >
                <div className={classes.requiredMark} />
                <DatePicker
                    className={classes.input}
                    value={strToDate(value)}
                    format="DD.MM.YYYY"
                    onChange={handleOnChange}
                    animateYearScrolling
                    error={Boolean(hasError)}
                    renderInput={(params) => {
                        return (
                            <TextField
                                {...params}
                                variant="standard"
                            />
                        )
                    }}
                    disabled={disabled}
                    fullWidth
                    data-testid={`dateSelect-${name}`}
                />
                <FormHelperText
                    error={Boolean(hasError)}
                    className={classes.errorMessage}
                >
                    {hasError}
                </FormHelperText>
            </div>
        </div>
    )
}

DateSelect.propTypes = propTypes
DateSelect.defaultProps = defaultProps

export default DateSelect
