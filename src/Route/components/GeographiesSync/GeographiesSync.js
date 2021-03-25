import React, {
    useContext,
} from 'react'
import PropTypes from 'prop-types'
import {
    MapContext,
} from 'react-simple-maps'
import useGeographiesSync from './useGeographiesSync'

const propTypes = {
    geography: PropTypes.any, // eslint-disable-line
    children: PropTypes.func.isRequired,
    className: PropTypes.string,
    parseGeographies: PropTypes.any, // eslint-disable-line
}
const defaultProps = {
    geography: undefined,
    parseGeographies: undefined,
    className: undefined,
}

const GeorgraphiesSync = ({
    geography,
    children,
    className,
    parseGeographies,
    ...restProps
}) => {
    const {
        path, projection,
    } = useContext(MapContext)
    const {
        geographies,
        outline,
        borders,
    } = useGeographiesSync({
        geography,
        parseGeographies,
    })

    return (
        <g
            className={`rsm-geographies ${className}`}
            {...restProps}
        >
            {
                geographies && geographies.length > 0
                    && children({
                        geographies, outline, borders, path, projection,
                    })
            }
        </g>
    )
}

GeorgraphiesSync.propTypes = propTypes
GeorgraphiesSync.defaultProps = defaultProps

export default GeorgraphiesSync
