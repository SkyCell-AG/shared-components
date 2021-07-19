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

    interface DateRangeSelectorProps {
        value: {from: string, to: string};
        onChange: (_: string, event: {target: {name: string, value: date}}) => void;
    }

    const DateRangeSelector: React.FC<DateRangeSelectorProps>

    interface DownloadOptionsProps {
        serialNumber: string,
        showTemperatureRangeOption: boolean,
        showPdfButton: boolean,
        showCsvButton: boolean,
        showTempRange: boolean,
        onCheckShowTempRange: () => boolean,
        sensorData: array<any>,
        printChart: () => void,
    }

    const DownloadOptions: React.FC<DownloadOptionsProps>

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

    const dayPassedToRange: (value: string) => object

    const dateToDateStr: (d: object) => object

    const dateToISO: (d: object) => object

    const dateToStr: (date: object, mask: string) => string

    const strToDate: (str: string, mask: string) => object

    const addNotationValues: (data: object) => array
    interface ErrorBoundaryProps {
        children: JSX.Element
    }
    const ErrorBoundary: React.FC<ErrorBoundaryProps>
   
    interface I18nLocaleProviderProps {
        children: JSX.Element
    }
    const I18nLocaleProvider: React.FC<I18nLocaleProviderProps>
}
