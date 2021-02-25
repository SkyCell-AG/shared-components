import React from 'react'
import PropTypes from 'prop-types'
import {
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

  return (
    <ComposableMap
      projection="geoEqualEarth"
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
    </ComposableMap>
  )
}

Route.propTypes = propTypes

export default Route
