import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

import {
    dayPassedToRange,
    dateToDateStr,
} from 'utils/DateUtils'

import DateRangeSelector from './DateRangeSelector'

const propTypes = {
    value: PropTypes.shape({
        from: PropTypes.string,
        to: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func,
    setDateRange: PropTypes.func.isRequired,
}

const defaultProps = {
    onChange: noop,
}

const DateRangeSelectorContainer = ({
    value = {},
    onChange,
    setDateRange,
    ...rest
}) => {
    const {
        from,
        to,
    } = value

    const selectOption = useCallback((selected) => {
        onChange(dayPassedToRange(selected))
    }, [onChange])

    const onChangeRange = useCallback((_, {
        target: {
            name,
            value: newValue,
        },
    }) => {
        const updatedData = {
            from,
            to,
            [name]: newValue,
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
            {...rest}
            selectOption={selectOption}
            onChangeRange={onChangeRange}
            setDateRange={setDateRange}
            from={dateToDateStr(from)}
            to={dateToDateStr(to)}
        />
    )
}

DateRangeSelectorContainer.propTypes = propTypes
DateRangeSelectorContainer.defaultProps = defaultProps

export default DateRangeSelectorContainer
