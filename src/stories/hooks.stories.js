import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
  import Auth from '@skycell-ag/auth'
import {useUserContacts, useUserAddresses} from 'hooks/businessObjects'
import ErrorBoundary from 'ErrorBoundary'
import { initVariables } from 'init'

export default {
    decorators: [(Story) => {
        const queryClient = new QueryClient()
        initVariables({key: 'REACT_APP_SKYMIND_API',value:'https://skymind.dev.skycell.ch'})
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
    } = props.hook()

    if (isLoading) {
        return (<div>Loading</div>)
    }
    if (error) {
        throw error       
    }
    
    const formatedData = props.formater ? props.formater(data): data
    
    return (
        <div>
           <div>{`${props.text}: ${formatedData}`}</div>           
        </div>
    )
}

export const UserContacts= () => {
    return (
        <ComponentWithHook
            text="Current user contact"
            hook={useUserContacts}
            formater={(contacts)=>{
                return contacts && contacts.length ? JSON.stringify(contacts): ''
            }}
        />  
    )
 }

 export const UserLocales= () => {
    return (
        <ComponentWithHook 
            text="Current user location"
            hook={useUserAddresses}
            formater={(addresses)=>{               
                return addresses && addresses.length ? addresses.map((address)=> address.addressName).join(', '): ''
            }}            
        />  
    )
 }

