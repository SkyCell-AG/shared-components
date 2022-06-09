import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

import {
    toDateRangeLimitSafe,
    dayPassedToRange,
    strOrDateToDateStr,
} from 'utils/DateUtils'

import DateRangeSelector from './DateRangeSelector'

const propTypes = {
    value: PropTypes.shape({
        from: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        to: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    }).isRequired,
    onChange: PropTypes.func,
    setDateRange: PropTypes.func.isRequired,
    mini: PropTypes.bool,
    showTimeRange: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    })),
}

const defaultProps = {
    onChange: noop,
    mini: false,
    showTimeRange: false,
    options: undefined,
}

const DateRangeSelectorContainer = ({
    value = {},
    onChange,
    setDateRange,
    mini,
    showTimeRange,
    options,
}) => {
    const {
        from = new Date(),
        to = new Date(),
    } = value

    const selectOption = useCallback((selected) => {
        const newValue = dayPassedToRange(selected)

        onChange({
            from: toDateRangeLimitSafe(newValue.from),
            to: toDateRangeLimitSafe(newValue.to, true),
        })
        setDateRange(false)
    }, [
        onChange,
        setDateRange,
    ])

    const onChangeRange = useCallback((_, {
        target: {
            name,
            value: newValue,
        },
    }) => {
        const updatedData = {
            from: toDateRangeLimitSafe(from),
            to: toDateRangeLimitSafe(to, true),
            [name]: toDateRangeLimitSafe(newValue, name === 'to'),
        }

        onChange(updatedData, {
            name,
            value: updatedData,
        })

        setDateRange(true)
    }, [
        from,
        onChange,
        setDateRange,
        to,
    ])

    return (
        <DateRangeSelector
            selectOption={selectOption}
            onChangeRange={onChangeRange}
            from={strOrDateToDateStr(from)}
            to={strOrDateToDateStr(to)}
            options={options}
            showTimeRange={showTimeRange}
            mini={mini}
        />
    )
}

DateRangeSelectorContainer.propTypes = propTypes
DateRangeSelectorContainer.defaultProps = defaultProps

export default DateRangeSelectorContainer
