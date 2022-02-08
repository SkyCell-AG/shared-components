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
    excursion: PropTypes.string,
    temperatureTimeAxis: PropTypes.arrayOf(PropTypes.string),
    style: PropTypes.shape({
        axisLineStyle: PropTypes.shape(),
        rangeLineStyle: PropTypes.shape(),
        simulated: PropTypes.shape(),
        ambient: PropTypes.shape(),
        energyLevel: PropTypes.shape(),
        excursionAxis: PropTypes.shape(),
    }),
    width: PropTypes.number.isRequired,
}

const defaultProps = {
    ambient: undefined,
    simulated: undefined,
    energyLevel: undefined,
    upperTempBound: null,
    lowerTempBound: null,
    excursion: undefined,
    temperatureTimeAxis: [],
    style: {
        axisLineStyle: undefined,
        simulated: undefined,
        ambient: undefined,
        energyLevel: undefined,
        rangeLineStyle: undefined,
        excursionAxis: undefined,
    },
}

const grey = '#00000066'

const axisStyle = {
    axisLabel: {
        fontSize: 8,
        padding: 30,
        fill: grey,
        fontFamily: 'Arimo, Roboto, Arial, sans-serif',
    },
    tickLabels: {
        fontSize: 8,
        padding: 2,
        fontFamily: 'Arimo, Roboto, Arial, sans-serif',
        fill: grey,
    },
}

const axisLineStyle = {
    stroke: grey,
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
        border: `1px solid ${grey}`,
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
    style,
    temperatureTimeAxis,
    width,
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
            return undefined
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

    const tickTemperatureTimeValues = useMemo(() => {
        return temperatureTimeAxis.map((element) => {
            const date = new Date(element)

            return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        })
    }, [temperatureTimeAxis])

    const tickTemperatureTimeFormat = useCallback((t) => {
        return t
    }, [])

    const excursionIndex = useMemo(() => {
        return temperatureTimeAxis.findIndex((element) => {
            return element === excursion
        }) + 1
    }, [
        temperatureTimeAxis,
        excursion,
    ])

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

    const getTemperaturePositions = useCallback((temperature) => {
        return temperature.map((element, i) => {
            return {
                x: i + 1,
                y: element,
            }
        })
    }, [])

    const ambientTemperature = useMemo(() => {
        return getTemperaturePositions(ambient)
    }, [
        getTemperaturePositions,
        ambient,
    ])

    const simulatedTemperature = useMemo(() => {
        return getTemperaturePositions(simulated)
    }, [
        getTemperaturePositions,
        simulated,
    ])

    return (
        <VictoryChart width={width}>
            <VictoryAxis
                data-testid="temperatureTimeAxis"
                style={axisStyle}
                gridComponent={(
                    <LineSegment
                        style={axisLineStyle}
                    />
                )}
                domain={[
                    1,
                    temperatureTimeAxis.length - 1,
                ]}
                tickValues={tickTemperatureTimeValues}
                tickFormat={tickTemperatureTimeFormat}
            />
            <VictoryAxis style={{
                ...axisStyle,
                axis: {
                    stroke: grey,
                    strokeWidth: 1,
                },
            }}
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
                        style={style.axisLineStyle || axisLineStyle}
                    />
                )}
            />
            {energyLevel && (
                <VictoryAxis
                    data-testid="energyLevelAxis"
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
                data={simulatedTemperature}
                style={style.simulated || {
                    data: {
                        stroke: '#61c6e9',
                        strokeWidth: 1.5,
                    },
                }}
            />
            {energyLevel && (
                <VictoryLine
                    data-testid="energyLevelLine"
                    data={energyLevelScaled}
                    style={style.energyLevel || {
                        data: {
                            stroke: '#9e9e9e',
                            strokeWidth: 1.5,
                        },
                    }}
                />
            )}
            <VictoryLine
                data={ambientTemperature}
                style={style.ambient || {
                    data: {
                        stroke: '#cf3b8a',
                        strokeWidth: 1.5,
                    },
                }}
            />
            <VictoryLine
                data={tempRangeTopData}
                style={style.rangeLineStyle || rangeLineStyle}
                labels={generateBorderLabel('Max')}
            />
            <VictoryLine
                data={tempRangeBottomData}
                style={style.rangeLineStyle || rangeLineStyle}
                labels={generateBorderLabel('Min')}
            />
            {excursion !== undefined && (
                <VictoryAxis
                    data-testid="excursionAxis"
                    dependentAxis
                    label="Excursion"
                    axisValue={excursionIndex}
                    style={style.excursionAxis || {
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
