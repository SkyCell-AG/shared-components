import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'

import dayPassedToRange from 'utils/dayPassedToRange'
import dateToDateStr from 'utils/dateToDateStr'

import DateRangeSelector from './DateRangeSelector'

const propTypes = {
    value: PropTypes.shape({
        from: PropTypes.string,
        to: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
}

const DateRangeSelectorContainer = ({
    value = {},
    onChange,
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
    }, [
        from,
        onChange,
        to,
    ])

    return (
        <DateRangeSelector
            {...rest}
            selectOption={selectOption}
            onChangeRange={onChangeRange}
            from={dateToDateStr(from)}
            to={dateToDateStr(to)}
        />
    )
}

DateRangeSelectorContainer.propTypes = propTypes

export default DateRangeSelectorContainer
