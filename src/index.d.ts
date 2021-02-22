import React from 'react'

declare module '@skycell-ag/shared-components' {
    interface TemperatureChartProps {
        ambient: int[],
        simulated: int[],
        energyLevel: int[],
        excursion: int,
    }

    export declare const TemperatureChart: React.SFC<TemperatureChartProps>
}
