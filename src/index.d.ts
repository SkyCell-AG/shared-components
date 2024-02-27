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

    interface TemperatureChart2Props {
        sensorData?: {
            d?: number[],
            t?: string,
        }[],
        sensorLabels: string[],
        onError?: (error: string) => void,
        isChartPrinting?: boolean,
        onFullScreen?: (e: any) => void,
        userOptions?: any,
        temperatureChartFullscreen?: boolean,
        setTemperatureChartFullscreen?: (value: boolean) => void,
        customColumns?: any[],
        customData?: any[],
        allowFullScreen?: boolean,
        customClassName?: string,
        isDateRange: boolean,
    }

    const TemperatureChart2: React.FC<TemperatureChart2Props>

    interface RouteProps {
        destinations: [number, number][]
    }

    const Route: React.FC<RouteProps>

    interface DateRangeSelectorProps {
        value: {from: string| number, to: string| number};
        onChange?: (_: string, event: {target: {name: string, value: Date}}) => void;
        setDateRange: (_: boolean) => void;
        showTimeRange?: boolean;
        mini?: boolean;
        options?: {
            label: string,
            value: number,
        }[],
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
        serialNumber?: string,
        showTemperatureRangeOption?: boolean,
        showPdfButton?: boolean,
        showCsvButton?: boolean,
        showTempRange?: boolean,
        onCheckShowTempRange?: () => boolean,
        sensorData?: any[],
        sensorCodes?: any[],
        printChart?: () => void,
        isContainer?: boolean,
        children?: JSX.Element,
    }

    const DownloadOptions: React.FC<DownloadOptionsProps>

    interface LoadingProps {
        className: string;
    }
    const Loading: React.FC<LoadingProps>

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

    interface ContainerTemperatureChartProps {
        serialNumber: string;
    }
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

    interface I18nLocaleProviderProps {
        children: JSX.Element
    }
    const I18nLocaleProvider: React.FC<I18nLocaleProviderProps>

    interface CardProps {
        children: JSX.Element | JSX.Element[],
        title?: string,
        icon?: string,
        className?: string,
        contentClass?: string,
        titleClass?: string,
        fullHeight?: boolean,
        status?: string,
    }

    const Card: React.FC<CardProps>

    interface CheckboxProps {
        title?: string,
        disabled?: boolean,
        indeterminate?: boolean,
        onChange?: (args:any)=> void,
        name?: string,
        value?: boolean,
        className?: string,
    }

    const Checkbox: React.FC<CheckboxProps>
}
