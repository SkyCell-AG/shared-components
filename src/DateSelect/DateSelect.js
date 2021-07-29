import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import {
    FormHelperText,
} from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    DatePicker,
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import clsx from 'clsx'
import {
    useTheme,
} from '@material-ui/core/styles'

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
                value: name === 'from' ? newValue.setHours(0, 0, 0) : newValue.setHours(23, 59, 59),
            },
        })
    }, [
        name,
        onChange,
    ])

    return (
        <div className={className}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <Label
                    title={title}
                    hasError={hasError}
                />
                <div
                    className={clsx(
                        {
                            [classes.dateField]: true,
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
            </MuiPickersUtilsProvider>
        </div>
    )
}

DateSelect.propTypes = propTypes
DateSelect.defaultProps = defaultProps

export default DateSelect
