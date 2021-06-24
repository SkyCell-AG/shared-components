import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
  import Auth from '@skycell-ag/auth'
import {useUserContacts, useUserLocales} from 'hooks/businessObjects'

export default {
    decorators: [(Story) => {
        const queryClient = new QueryClient()
        return (
            <Auth>
                <QueryClientProvider client={queryClient}>   
                    <Story />
                </QueryClientProvider>          
            </Auth>                 
        )
    }],
    title: 'Hooks',
}

const ComponentWithHook = (props) => {     
    const {
        data,
        isLoading,
    } = props.hook()

    if (isLoading) {
        return (<div>Loading</div>)
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
            hook={useUserLocales}                
        />  
    )
 }

