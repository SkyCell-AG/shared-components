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
    VictoryLabel,
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
    ambient: undefined,
    simulated: undefined,
    energyLevel: undefined,
    upperTempBound: 8,
    lowerTempBound: 2,
    excursion: undefined,
}

const axisStyle = {
    axisLabel: {
        fontSize: 8,
        padding: 30,
        fill: '#00000066',
        fontFamily: 'Arimo, Roboto, Arial, sans-serif',
    },
    tickLabels: {
        fontSize: 8,
        padding: 2,
        fontFamily: 'Arimo, Roboto, Arial, sans-serif',
        fill: '#00000066',
    },
}

const axisLineStyle = {
    stroke: '#00000066',
}

const generateBorderLabel = (title) => {
    return ({
        datum,
        data,
    }) => {
        if (datum === data[data.length - 1]) {
            return title
        }

        return ''
    }
}

const rangeLineStyle = {
    data: {
        stroke: '#edae49',
        strokeDasharray: [
            3,
            2,
        ],
        strokeWidth: 1.5,
    },
    parent: {
        border: '1px solid #00000066',
    },
    labels: {
        fontSize: 8,
        padding: 2,
        fill: '#edae49',
    },
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
        if (!energyLevel) {
            return []
        }

        return energyLevel.map((val) => { return val * scale })
    }, [
        scale,
        energyLevel,
    ])

    const tickPercentValues = useMemo(() => {
        return [
            0,
            20,
            40,
            60,
            80,
            100,
        ].map((val) => { return val * scale })
    }, [scale])

    const tickPercentFormat = useCallback((val) => {
        return `${Math.round(val / scale)}%`
    }, [scale])

    const generateBoundaryData = useCallback((boundary) => {
        return [
            {
                x: 0,
                y: boundary,
            },
            {
                x: simulated.length - 1,
                y: boundary,
            },
        ]
    }, [simulated])

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
            <VictoryAxis style={{
                ...axisStyle,
                axis: {
                    stroke: '#00000066',
                    strokeWidth: 1,
                },
            }}
            />
            <VictoryLabel
                x={15}
                y={55}
                style={axisStyle.axisLabel}
                text="Temperature"
            />
            <VictoryAxis
                dependentAxis
                style={{
                    ...axisStyle,
                    axis: {
                        stroke: 'transparent',
                    },
                }}
                gridComponent={(
                    <LineSegment
                        style={axisLineStyle}
                    />
                )}
            />
            {energyLevel && (
                <VictoryAxis
                    dependentAxis
                    orientation="right"
                    label="Energy Level"
                    tickValues={tickPercentValues}
                    tickFormat={tickPercentFormat}
                    style={axisStyle}
                    gridComponent={(
                        <LineSegment
                            style={axisLineStyle}
                        />
                    )}
                />
            )}
            <VictoryLine
                data={simulated}
                style={{
                    data: {
                        stroke: '#61c6e9',
                        strokeWidth: 1.5,
                    },
                }}
            />
            {energyLevel && (
                <VictoryLine
                    data={energyLevelScaled}
                    style={{
                        data: {
                            stroke: '#9e9e9e',
                            strokeWidth: 1.5,
                        },
                    }}
                />
            )}
            <VictoryLine
                data={ambient}
                style={{
                    data: {
                        stroke: '#cf3b8a',
                        strokeWidth: 1.5,
                    },
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
                            stroke: 'red',
                        },
                        tickLabels: {
                            fill: 'none',
                        },
                        axisLabel: {
                            fontSize: 8,
                            padding: -10,
                        },
                    }}
                />
            )}
        </VictoryChart>
    )
}

TemperatureChart.propTypes = propTypes
TemperatureChart.defaultProps = defaultProps

export default TemperatureChart
