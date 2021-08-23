import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import requestBusinessObjects from 'services/requestBusinessObjects'

export const queryWrapper = ({
    children,
}) => {
    const queryClient = new QueryClient()

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
