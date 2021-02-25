import React, {
  useContext,
} from 'react'
import {
    MapContext,
} from 'react-simple-maps'
import useGeographiesSync from './useGeographiesSync'

const GeorgraphiesSync = ({
  geography,
  children,
  className,
  parseGeographies,
  ...restProps
}) => {
  const { path, projection } = useContext(MapContext)
  const {
    geographies,
    outline,
    borders,
  } = useGeographiesSync({ geography, parseGeographies })

  return (
    <g className={`rsm-geographies ${className}`} {...restProps}>
      {
        geographies && geographies.length > 0 &&
        children({ geographies, outline, borders, path, projection })
      }
    </g>
  )
}

export default GeorgraphiesSync
