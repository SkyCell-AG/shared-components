import React, {
    useLayoutEffect,
    useRef,
} from 'react'
import PropTypes from 'prop-types'

import loadChart from './loadChart'
import defaultOptions from './options'

const propTypes = {
    value: PropTypes.arrayOf(PropTypes.array),
    columns: PropTypes.arrayOf(PropTypes.array).isRequired,
    userOptions: PropTypes.objectOf(PropTypes.any),
    onError: PropTypes.func.isRequired,
    className: PropTypes.string,
}

const defaultProps = {
    value: [],
    userOptions: {},
    className: '',
}

const LineChart = (props) => {
    const {
        value,
        columns,
        onError,
        userOptions,
        className,
    } = props

    const elm = useRef()

    useLayoutEffect(() => {
        loadChart(value, elm.current, columns, {
            ...defaultOptions,
            ...userOptions,
        }, onError)
    }, [
        columns,
        onError,
        userOptions,
        value,
    ])

    return (
        <div
            className={className}
            ref={elm}
        />
    )
}

LineChart.propTypes = propTypes
LineChart.defaultProps = defaultProps

export default LineChart
