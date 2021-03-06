import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import Auth from '@skycell-ag/auth'
import {
    useUserContacts,
    useUserAddresses,
    useProcesses,
    useUserLocations,
    useEmptyProcess,
} from 'hooks/businessObjects'
import ErrorBoundary from 'ErrorBoundary'
import { initVariables } from 'init'

export default {
    decorators: [(Story) => {
        const queryClient = new QueryClient()
        initVariables({ 'REACT_APP_SKYMIND_API': 'https://skymind.dev.skycell.ch' })
        return (
            <ErrorBoundary>
                <Auth>
                    <QueryClientProvider client={queryClient}>
                        <Story />
                    </QueryClientProvider>
                </Auth>
            </ErrorBoundary>
        )
    }],
    title: 'Hooks',
}

const ComponentWithHook = (props) => {
    const {
        data,
        isLoading,
        error,
    } = props.hook(props.hookParams)

    if (isLoading) {
        return (<div>Loading</div>)
    }
    if (error) {
        throw error
    }

    const formatedData = props.formater ? props.formater(data) : data

    return (
        <div>
            <div>{`${props.text}: ${formatedData}`}</div>
        </div>
    )
}

export const UserContacts = () => {
    return (
        <ComponentWithHook
            text="Current user contact"
            hook={useUserContacts}
            formater={(contacts) => {
                return contacts && contacts.length ? JSON.stringify(contacts) : ''
            }}
        />
    )
}

export const UserAddresses = () => {
    return (
        <ComponentWithHook
            text="Current user adresses"
            hook={useUserAddresses}
            formater={(addresses) => {
                return addresses && addresses.length ? addresses.map((address) => address.addressName).join(', ') : ''
            }}
        />
    )
}
export const UserLocations = () => {
    return (
        <ComponentWithHook
            text="Current user locations"
            hook={useUserLocations}
            formater={(locations) => {
                return locations && locations.length ? locations.map((location) => location.locationName).join(', ') : ''
            }}
        />
    )
}

export const LocalesProcesses = () => {
    return (
        <ComponentWithHook
            text="Available Processes's names for Location with id=1"
            hook={useProcesses}
            hookParams={1}
            formater={(processes) => {
                return processes && processes.length ? processes.map((process) => process.processLabel).join(', ') : ''
            }}
        />
    )
}

export const EmptyProcess = () => {
    return (
        <ComponentWithHook
            text="Empty Process for SENDING"
            hook={useEmptyProcess}
            hookParams={'SENDING'}
            formater={(process) => {
                return process ? process.processLabel : ''
            }}
        />
    )
}


