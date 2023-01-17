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
    VictoryScatter,
    VictoryGroup,
} from 'victory'

import getScale from './getScaleOffset'

const propTypes = {
    containerSensorData: PropTypes.shape({
        data: PropTypes.arrayOf(PropTypes.shape({
            d: PropTypes.arrayOf(PropTypes.number),
            t: PropTypes.string,
        })),
    }),
    energyLevel: PropTypes.arrayOf(PropTypes.number),
    maxTemperature: PropTypes.number,
    minTemperature: PropTypes.number,
    excursion: PropTypes.string,
    style: PropTypes.shape({
        axisLineStyle: PropTypes.shape(),
        rangeLineStyle: PropTypes.shape(),
        simulated: PropTypes.shape(),
        ambient: PropTypes.shape(),
        energyLevel: PropTypes.shape(),
        excursionAxis: PropTypes.shape(),
    }),
}

const defaultProps = {
    containerSensorData: {
        data: [],
    },
    energyLevel: undefined,
    maxTemperature: null,
    minTemperature: null,
    excursion: undefined,
    style: {
        axisLineStyle: undefined,
        simulated: undefined,
        ambient: undefined,
        energyLevel: undefined,
        rangeLineStyle: undefined,
        excursionAxis: undefined,
    },
}

const grey = '#EBEBEB'
const darkGrey = '#939393'
const purple = '#cf3b8a'
const blue = '#61c6e9'
const width = 2300
const height = 1000

const axisStyle = {
    axisLabel: {
        fontSize: 36,
        padding: 70,
        fill: darkGrey,
        fontFamily: 'Arimo, Roboto, Arial, sans-serif',
    },
    tickLabels: {
        fontSize: 36,
        padding: 20,
        fontFamily: 'Arimo, Roboto, Arial, sans-serif',
        fill: darkGrey,
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
        strokeWidth: 3.5,
    },
    parent: {
        border: `1px solid ${grey}`,
    },
    labels: {
        fontSize: 36,
        padding: 20,
        fill: '#edae49',
    },
}

const nubmerOfTicks = 7

const TemperatureChart = ({
    containerSensorData: {
        data,
    },
    energyLevel,
    maxTemperature,
    minTemperature,
    excursion,
    style,
}) => {
    const ambient = useMemo(() => {
        return data.map(({
            d,
        }) => {
            const [
                _sim,
                amb,
            ] = d

            return amb
        })
    }, [data])

    const simulated = useMemo(() => {
        return data.map(({
            d,
        }) => {
            const [
                sim,
                _amb,
            ] = d

            return sim
        })
    }, [data])

    const temperatureTimeAxis = useMemo(() => {
        return data.map(({
            t,
        }) => {
            return t
        })
    }, [data])

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

    const tickTemperatureTimeFormat = useCallback((t) => {
        return t
    }, [])

    const excursionIndex = useMemo(() => {
        return temperatureTimeAxis.findIndex((element) => {
            const date = new Date(excursion)
            const excursionFormatted = `${(`0${date.getDate()}`).slice(-2)}.${(`0${date.getMonth() + 1}`).slice(-2)}.${date.getFullYear()} ${(`0${date.getHours()}`).slice(-2)}:${(`0${date.getMinutes()}`).slice(-2)}:${(`0${date.getSeconds()}`).slice(-2)}`

            return element === excursionFormatted
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
        return generateBoundaryData(maxTemperature)
    }, [
        generateBoundaryData,
        maxTemperature,
    ])

    const tempRangeBottomData = useMemo(() => {
        return generateBoundaryData(minTemperature)
    }, [
        generateBoundaryData,
        minTemperature,
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
        <VictoryChart
            width={width}
            height={height}
        >
            <VictoryAxis
                data-testid="temperatureTimeAxis"
                style={axisStyle}
                fixLabelOverlap
                domain={[
                    1,
                    temperatureTimeAxis.length - 1,
                ]}
                tickValues={temperatureTimeAxis}
                tickFormat={tickTemperatureTimeFormat}
                tickCount={nubmerOfTicks}
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
            <VictoryGroup data={simulatedTemperature}>
                <VictoryLine
                    style={style.simulated || {
                        data: {
                            stroke: blue,
                            strokeWidth: 4,
                        },
                    }}
                />
                <VictoryScatter
                    style={{
                        data: {
                            fill: blue,
                        },
                    }}
                    size={6}
                />
            </VictoryGroup>
            {energyLevel && (
                <VictoryLine
                    data={energyLevelScaled}
                    data-testid="energyLevelLine"
                    style={style.energyLevel || {
                        data: {
                            stroke: '#9e9e9e',
                            strokeWidth: 4,
                        },
                    }}
                />
            )}
            <VictoryGroup data={ambientTemperature}>
                <VictoryLine
                    style={style.ambient || {
                        data: {
                            stroke: purple,
                            strokeWidth: 4,
                        },
                    }}
                />
                <VictoryScatter
                    style={{
                        data: {
                            fill: purple,
                        },
                    }}
                    size={6}
                />
            </VictoryGroup>
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
                        tickLabels: {
                            fontSize: 36,
                            padding: 2,
                            fontFamily: 'Arimo, Roboto, Arial, sans-serif',
                            fill: 'transparent',
                        },
                        axis: {
                            stroke: 'red',
                        },
                        axisLabel: {
                            fontSize: 36,
                            fill: darkGrey,
                            fontFamily: 'Arimo, Roboto, Arial, sans-serif',
                            padding: -60,
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
