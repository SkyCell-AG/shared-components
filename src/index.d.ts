import React from 'react'

declare module '@skycell-ag/shared-components' {
    interface TemperatureChartProps {
        ambient: number[];
        simulated: number[];
        energyLevel: number[];
        excursion: number;
    }

    const TemperatureChart: React.FC<TemperatureChartProps>

    interface RouteProps {
        destinations: [number, number][]
    }

    const Route: React.FC<RouteProps>

    interface LoadingScreenProps {}
    const LoadingScreen: React.FC<LoadingScreenProps>
}
