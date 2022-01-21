import React, {
    useCallback,
    useReducer,
    useEffect,
    useMemo,
} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import createReducer from 'utils/createReducer'

import rangeToDayPassed from 'utils/rangeToDayPassed'
import strToDate from 'utils/DateUtils/strToDate'
import dateToStr from 'utils/DateUtils/dateToStr'
import dateMask from 'utils/DateUtils/dateMask'

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

const UPDATE_INPUT = 'UPDATE_INPUT'
const SYNC_INPUTS = 'SYNC_INPUTS'
const SET_VALUES_FROM_INPUTS = 'SET_VALUES_FROM_INPUTS'
const SET_RANGE = 'SET_RANGE'
const CLOSE_DAY_PICKER = 'CLOSE_DAY_PICKER'
const OPEN_DAY_PICKER = 'OPEN_DAY_PICKER'
const SELECT_FROM = 'SELECT_FROM'

const reducer = createReducer({
    [SET_VALUES_FROM_INPUTS]: (state) => {
        return {
            ...state,
            from: strToDate(state.fromInput),
            to: strToDate(state.toInput),
            dayPickerOpened: false,
        }
    },
    [UPDATE_INPUT]: (state, {
        payload: {
            value,
            name,
        },
    }) => {
        return {
            ...state,
            [`${name}Input`]: value,
        }
    },
    [SYNC_INPUTS]: (state, {
        payload: {
            from,
            to,
        },
    }) => {
        return {
            ...state,
            fromInput: dateToStr(from, dateMask),
            toInput: dateToStr(to, dateMask),
        }
    },
    [SELECT_FROM]: (state, {
        payload: {
            date,
        },
    }) => {
        const {
            to,
        } = state

        return {
            ...state,
            from: date,
            to: date.getTime() > to.getTime() ? date : to,
            fromSelected: true,
        }
    },
    [CLOSE_DAY_PICKER]: (state) => {
        return {
            ...state,
            dayPickerOpened: false,
        }
    },
    [OPEN_DAY_PICKER]: (state) => {
        return {
            ...state,
            dayPickerOpened: true,
            fromSelected: false,
        }
    },
    [SET_RANGE]: (state, {
        payload: {
            from,
            to,
        },
    }) => {
        return {
            ...state,
            from,
            to,
        }
    },
})

const DateRangeSelector = ({
    mini,
    options,
    selectOption,
    showTimeRange,
    onChangeRange,
    from: fromStr,
    to: toStr,
}) => {
    const classes = useStyles()
    const [
        {
            from,
            fromInput,
            to,
            toInput,
            fromSelected,
            dayPickerOpened,
        },
        dispatch,
    ] = useReducer(reducer, {})

    const dayPassed = from && to ? rangeToDayPassed({
        from: strToDate(fromStr),
        to: strToDate(toStr),
    }) : undefined

    const submitDateRange = useCallback(({
        from: newFrom,
        to: newTo,
    }) => {
        dispatch({
            type: CLOSE_DAY_PICKER,
        })

        onChangeRange(newTo, {
            target: {
                value: {
                    from: new Date(newFrom),
                    to: new Date(newTo),
                },
            },
        })
    }, [onChangeRange])

    const openDayPicker = useCallback(() => {
        dispatch({
            type: OPEN_DAY_PICKER,
        })
    }, [])

    const onDayClick = useCallback((
        date,
        {
            disabled,
        },
    ) => {
        if (disabled) {
            return
        }

        if (fromSelected) {
            submitDateRange({
                from,
                to: date,
            })
        }

        dispatch({
            type: SELECT_FROM,
            payload: {
                date,
            },
        })
    }, [
        submitDateRange,
        fromSelected,
        from,
    ])

    const disabledDays = useMemo(() => {
        if (fromSelected) {
            return {
                before: from,
            }
        }

        return null
    }, [
        from,
        fromSelected,
    ])

    useEffect(() => {
        dispatch({
            type: SYNC_INPUTS,
            payload: {
                from, to,
            },
        })
    }, [
        from,
        to,
    ])

    useEffect(() => {
        dispatch({
            type: SET_RANGE,
            payload: {
                from: strToDate(fromStr),
                to: strToDate(toStr),
            },
        })
    }, [
        fromStr,
        toStr,
    ])

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
                                className={
                                    clsx(
                                        classes.option,
                                        {
                                            [classes.selectedOption]: dayPassed === value,
                                        },
                                    )
                                }
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
                    <div
                        className={classes.dateContainer}
                        onClick={openDayPicker}
                        onKeyDown={openDayPicker}
                        data-testid="daypicker-input"
                    >
                        <div
                            className={
                                clsx(
                                    dayPickerOpened && !fromSelected && classes.editedDate,
                                )
                            }
                        >
                            <input
                                value={fromInput}
                                onChange={(event) => {
                                    dispatch({
                                        type: UPDATE_INPUT,
                                        payload: {
                                            value: event.target.value,
                                            name: 'from',
                                        },
                                    })
                                }}
                                onBlur={() => {
                                    dispatch({
                                        type: SET_VALUES_FROM_INPUTS,
                                    })
                                }}
                            />
                        </div>
                        -
                        <div
                            className={
                                clsx(
                                    dayPickerOpened && fromSelected && classes.editedDate,
                                )
                            }
                        >
                            <input
                                value={toInput}
                                onChange={(event) => {
                                    dispatch({
                                        type: UPDATE_INPUT,
                                        payload: {
                                            value: event.target.value,
                                            name: 'to',
                                        },
                                    })
                                }}
                                onBlur={() => {
                                    dispatch({
                                        type: SET_VALUES_FROM_INPUTS,
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className={clsx(
                            classes.dayPickerContainer,
                            dayPickerOpened && classes.dayPickerOpened,
                        )}
                    >
                        <DayPicker
                            numberOfMonths={2}
                            onDayClick={onDayClick}
                            disabledDays={disabledDays}
                            selectedDays={[
                                from,
                                {
                                    from,
                                    to,
                                },
                            ]}
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
