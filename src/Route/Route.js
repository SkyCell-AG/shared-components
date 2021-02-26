import React, {
  useMemo,
} from 'react'
import PropTypes from 'prop-types'
import {
  ZoomableGroup,
  ComposableMap,
  Geography,
  Graticule,
  Marker,
  Line,
} from 'react-simple-maps'

import GeographiesSync from './components/GeographiesSync'

import mapData from './mapData'

const propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number),
  ).isRequired,
}

const Route = ({
  destinations,
}) => {
  const first = destinations[0]
  const last = destinations[destinations.length - 1]

  const borders = useMemo(() => {
    return destinations.reduce((res, [long, lat]) => {
      return {
        latMax: Math.max(res.latMax, lat),
        latMin: Math.min(res.latMin, lat),
        longMax: Math.max(res.longMax, long),
        longMin: Math.min(res.longMin, long),
      }
    }, {
      latMax: -Infinity,
      latMin: Infinity,
      longMax: -Infinity,
      longMin: Infinity,
    })

  }, [destinations])

  const center = useMemo(() => {
    return [
      (borders.longMax + borders.longMin)/2,
      (borders.latMax + borders.latMin)/2,
    ]
  }, [borders])

  const zoom = useMemo(() => {
    return Math.floor(Math.min(
      90/(borders.longMax - borders.longMin),
      360/(borders.latMax - borders.latMin),
    ))+1
  }, [borders])

  return (
    <ComposableMap
      projection="geoEqualEarth"
    >
      <ZoomableGroup
        center={center}
        zoom={zoom}
      >
        <Graticule stroke="#DDD" />
        <GeographiesSync
          geography={mapData}
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }) =>
              geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
          }
        </GeographiesSync>
        <Line
          coordinates={destinations}
          stroke="#F53"
          strokeWidth={2}
        />
        <Marker coordinates={first}>
          <circle r={4} fill="#F53" />
        </Marker>
        <Marker coordinates={last}>
          <circle r={4} fill="#A43" />
        </Marker>
      </ZoomableGroup>
    </ComposableMap>
  )
}

Route.propTypes = propTypes

export default Route
