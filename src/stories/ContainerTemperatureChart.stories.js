import React, {
    Suspense,
} from 'react'
import {
    RelayEnvironmentProvider,
} from 'react-relay/hooks'

import ContainerTemperatureChart from 'ContainerTemperatureChart'
import RelayEnvironment from 'RelayEnvironment'
import Loading from 'Loading'

export default {
    component: ContainerTemperatureChart,
    decorators: [(Story) => {
        return (
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <Story />
            </RelayEnvironmentProvider>
        )
    }],
    title: 'ContainerTemperatureChartd'
}

const Template = args => <Suspense fallback={<Loading />}><ContainerTemperatureChart serialNumber="031-10532" {...args} /></Suspense>

export const Default = Template.bind({})


