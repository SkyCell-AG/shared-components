import React from 'react'
import PropTypes from 'prop-types'

import DateSelect from './DateSelect'

const propTypes = {
    onChange: PropTypes.func.isRequired,
}

const DateSelectContainer = (props) => {
    return (
        <DateSelect
            {...props}
        />
    )
}

DateSelectContainer.propTypes = propTypes

export default DateSelectContainer
