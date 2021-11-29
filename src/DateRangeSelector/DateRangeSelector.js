import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import DateSelect from 'DateSelect'
import rangeToDayPassed from 'utils/rangeToDayPassed'
import {
    strToDate,
} from 'utils/DateUtils'

import useStyles from './DateRangeSelector.style'

const propTypes = {
    mini: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    })),
    selectOption: PropTypes.func.isRequired,
    onChangeRange: PropTypes.func.isRequired,
    showTimeRange: PropTypes.bool,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

const defaultProps = {
    mini: false,
    showTimeRange: false,
    options: [
        {
            label: '24h',
            value: 1,
        },
        {
            label: '7d',
            value: 7,
        },
        {
            label: '14d',
            value: 14,
        },
    ],
}

const DateRangeSelector = ({
    mini,
    options,
    selectOption,
    showTimeRange,
    onChangeRange,
    from,
    to,
}) => {
    const classes = useStyles()
    const dayPassed = from && to ? rangeToDayPassed({
        from: strToDate(from),
        to: strToDate(to),
    }) : undefined

    return (
        <div className={classes.wrapper}>
            {!mini && (
                <div className={classes.optionsWrapper}>
                    {options.map(({
                        label,
                        value,
                    }) => {
                        return (
                            <div
                                data-testid={`date-range-button-${value}`}
                                key={value}
                                className={clsx(classes.option, {
                                    [classes.selectedOption]: dayPassed === value,
                                })}
                                onMouseDown={() => {
                                    selectOption(value)
                                }}
                            >
                                {label}
                            </div>
                        )
                    })}
                </div>
            )}
            {showTimeRange && (
                <div className={classes.inputsWrapper}>
                    <div className={classes.input}>
                        <DateSelect
                            title="From"
                            className={classes.datePicker}
                            onChange={onChangeRange}
                            name="from"
                            value={from}

                        />
                    </div>
                    <div className={classes.input}>
                        <DateSelect
                            title="To"
                            className={classes.datePicker}
                            onChange={onChangeRange}
                            name="to"
                            value={to}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

DateRangeSelector.propTypes = propTypes
DateRangeSelector.defaultProps = defaultProps

export default DateRangeSelector
