import React from 'react'

declare module '@skycell-ag/shared-components' {
    interface TemperatureChartProps {
        ambient: number[];
        simulated: number[];
        energyLevel: number[];
        excursion: number;
    }

    const TemperatureChart: React.SFC<TemperatureChartProps>
}
