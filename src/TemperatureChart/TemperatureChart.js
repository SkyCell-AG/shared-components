import React, {
  useMemo,
  useCallback,
} from 'react'
import PropTypes from 'prop-types'
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  LineSegment,
} from 'victory'

import getScale from './getScaleOffset'

const propTypes = {
  ambient: PropTypes.arrayOf(PropTypes.number),
  simulated: PropTypes.arrayOf(PropTypes.number),
  energyLevel: PropTypes.arrayOf(PropTypes.number),
  upperTempBound: PropTypes.number,
  lowerTempBound: PropTypes.number,
  excursion: PropTypes.number,
}

const defaultProps = {
  upperTempBound: 8,
  lowerTempBound: 2,
  excursion: undefined,
}

const axisStyle = {
  axisLabel: {
    fontSize: 12,
    fontStyle: 'italic',
    padding: 30,
  },
  tickLabels: {
    fontSize: 12,
    padding: 2,
  },
}

const axisLineStyle = {
  stroke: '#ccc',
}

const generateBorderLabel = (title) => ({datum, data}) => {
  if (datum === data[data.length-1]) {
    return title
  }

  return ''
}

const rangeLineStyle = {
  data: {
    stroke: '#edae49',
    strokeDasharray: [3,2],
  },
  parent: {
    border: '1px solid #ccc',
  },
  labels: {
    fontSize: 12,
    padding: 2,
    fill: '#edae49',
  }
} 

const TemperatureChart = ({
  ambient,
  simulated,
  energyLevel,
  upperTempBound,
  lowerTempBound,
  excursion,
}) => {
  const scale = useMemo(() => {
    return getScale({
      ambient,
      simulated,
    })
  }, [
    ambient,
    simulated,
  ])

  const energyLevelScaled = useMemo(() => {
    return energyLevel.map(val => val*scale)
  }, [
    scale,
    energyLevel,
  ])

  const tickPercentValues = useMemo(() => {
    return [0, 20, 40, 60, 80, 100].map(val => val*scale)
  }, [
    scale,
  ])

  const tickPercentFormat = useCallback((val) => {
    return `${Math.random(val/scale)}%`
  }, [
    scale,
  ])

  const generateBoundaryData = useCallback((boundary) => {
    return [
      {
        x: 0,
        y: boundary,
      },
      {
        x: simulated.length-1,
        y: boundary,
      },
    ]
  },[
    simulated,
  ])

  const tempRangeTopData = useMemo(() => {
    return generateBoundaryData(upperTempBound)
  }, [
    generateBoundaryData,
    upperTempBound,
  ])

  const tempRangeBottomData = useMemo(() => {
    return generateBoundaryData(lowerTempBound)
  }, [
    generateBoundaryData,
    lowerTempBound,
  ])

  return (
    <VictoryChart>
      <VictoryAxis
        gridComponent={
          <LineSegment
            style={{
              stroke: '#ccc',
            }}
          />
        }
      />
      <VictoryAxis
        dependentAxis
        label="Temperature (℃elsius)"
        style={axisStyle}
        gridComponent={
          <LineSegment
            style={axisLineStyle}
          />
        }
      />
      <VictoryAxis
        dependentAxis
        orientation="right"
        label="Energy Level"
        tickValues={tickPercentValues}
        tickFormat={tickPercentFormat}
        style={axisStyle}
        gridComponent={
          <LineSegment
            style={axisLineStyle}
          />
        }
      />
      <VictoryLine 
        data={simulated}
        style={{
          data: {
            stroke: '#61c6e9',
          },
        }}
      />
      <VictoryLine
        data={energyLevelScaled}
        style={{
          data: {
            stroke: '#9e9e9e',
          }
        }}
      />
      <VictoryLine
        data={ambient}
        style={{
          data: {
            stroke: '#cf3b8a',
          }
        }}
      />
      <VictoryLine
        data={tempRangeTopData}
        style={rangeLineStyle}
        labels={generateBorderLabel('Max')}
      />
      <VictoryLine
        data={tempRangeBottomData}
        style={rangeLineStyle}
        labels={generateBorderLabel('Min')}
      />
      {excursion !== undefined && (
        <VictoryAxis
          dependentAxis
          label="Excursion"
          axisValue={excursion}
          style={{
            axis: {
              stroke: 'red'
            },
            tickLabels: {
              fill: 'none',
            },
            axisLabel: {
              fontSize: 8,
              padding: -10
            }
          }}
        />
      )}
    </VictoryChart>
  )
}

TemperatureChart.propTypes = propTypes
TemperatureChart.defaultProps= defaultProps

export default TemperatureChart
