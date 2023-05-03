import React from 'react'

declare module '@skycell-ag/shared-components' {

    interface styleObject {
        axisLineStyle: object,
        rangeLineStyle: object,
        simulated: object,
        ambient: object,
        energyLevel: object,
        excursionAxis: object,
    }

    interface TemperatureChartProps {
        ambient: number[];
        simulated: number[];
        energyLevel: number[];
        excursion: number;
        style: styleObject;
    }

    const TemperatureChart: React.FC<TemperatureChartProps>

    interface RouteProps {
        destinations: [number, number][]
    }

    const Route: React.FC<RouteProps>

    interface DateRangeSelectorProps {
        value: {from: string, to: string};
        onChange: (_: string, event: {target: {name: string, value: Date}}) => void;
    }

    const DateRangeSelector: React.FC<DateRangeSelectorProps>

    interface RadioProps {
        disabled?: boolean,
        title?: string,
        options?: {
            value: string,
            label: string,
        }[],
        name?: string,
        value?: string,
        compact?: boolean,
        small?: boolean,
        className?: string,
        showInColumns?: boolean,
        required?: boolean,
        classes?: object,
        onChange: (_: string, event: {target: {name: string, value: string}}) => void;
    }

    const Radio: React.FC<RadioProps>

    interface DownloadOptionsProps {
        serialNumber: string,
        showTemperatureRangeOption: boolean,
        showPdfButton: boolean,
        showCsvButton: boolean,
        showTempRange: boolean,
        onCheckShowTempRange: () => boolean,
        sensorData: any[],
        sensorCodes: any[],
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
        loadOptions: (phrase: string) => object[];
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

    interface dayPassedToRangeProps {
        from: string;
        to: string;
    }
    const dayPassedToRange: (value: string) => dayPassedToRangeProps

    const dateToDateStr: (d: object) => Date

    const dateToISO: (d: object) => Date

    const dateToStr: (date: object, mask: string) => string

    const strToDate: (str: string, mask: string) => Date

    const addNotationValues: (data: object) => any[]
    interface ErrorBoundaryProps {
        children: JSX.Element
    }
    const ErrorBoundary: React.FC<ErrorBoundaryProps>

    interface I18nLocaleProviderProps {
        children: JSX.Element
    }
    const I18nLocaleProvider: React.FC<I18nLocaleProviderProps>
}
