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

    interface LoadingProps {
        className: string;
    }
    const Loading: React.FC<LoadingProps>

    interface LoadingScreenProps {}
    const LoadingScreen: React.FC<LoadingScreenProps>

    interface AvatarProps {
        img: string;
    }
    const Avatar: React.FC<AvatarProps>

    interface TypeaheadProps {
        loadOptions: (phrase: string) => array<object>;
        loadLabel: (value: string) => string;
        value: string;
        valueField: string;
        labelField: string;
    }
    const Typeahead: React.FC<TypeaheadProps>

    interface ContainerTemperatureChartProps {
        serialNumber: string;
    }
    const ContainerTemperatureChart: React.FC<ContainerTemperatureChartProps>

    interface ErrorBoundaryProps {
        children: JSX.Element
    }
    const ErrorBoundary: React.FC<ErrorBoundaryProps>
}
