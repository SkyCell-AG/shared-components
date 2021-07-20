import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import requestBusinessObjects from 'services/requestBusinessObjects'

const queryClient = new QueryClient()

export const queryWrapper = ({
    children,
}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export const requestBusinessObjectsEmptyMock = () => {
    requestBusinessObjects.mockImplementation(() => {
        return Promise.resolve({
            data: {
                items: [],
            },
        })
    })
}
