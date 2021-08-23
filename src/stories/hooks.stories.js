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
    useContacts,
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
    } = props.hook(props.hookParams, props.moreHookParams)

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
            hookParams={4}
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
            hookParams={'RECEIVING'}
            formater={(process) => {
                return process ? process.processLabel : ''
            }}
        />
    )
}

export const EmptyProcessForAssets = () => {
    return (
        <ComponentWithHook
            text="Empty Process RECEIVING for 011-10186 asset"
            hook={useEmptyProcess}
            hookParams={'RECEIVING'}
            moreHookParams={{
                assetNumber: '011-10186',
                location: 4,
             }}
            formater={(process) => {
                return process? JSON.stringify(process) : ''
            }}
        />
    )
}

export const ContactsByEmails = () => {
    return (
        <ComponentWithHook
            text="Contacts for emails 'christian.wegmann@skycell.ch' and 'julia.miklevska@skycell.ch'"
            hook={useContacts}
            hookParams={[
            "christian.wegmann@skycell.ch",
            "julia.miklevska@skycell.ch",
            ]}
            formater={(contacts) => {
                return contacts && contacts.length ? contacts.map((contact) => contact.contactName).join(', ') : ''
            }}
        />
    )
}
