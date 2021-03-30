import React, {
    Suspense,
} from 'react'
import {
    RelayEnvironmentProvider,
} from 'react-relay/hooks'
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

import ContainerTemperatureChart from 'ContainerTemperatureChart'
import RelayEnvironment from 'RelayEnvironment'
import Loading from 'Loading'

export default {
    component: ContainerTemperatureChart,
    decorators: [(Story) => {
        return (
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <RelayEnvironmentProvider environment={RelayEnvironment}>
                    <Story />
                </RelayEnvironmentProvider>
            </MuiPickersUtilsProvider>
        )
    }],
    title: 'ContainerTemperatureChartd',
}

const Template = args => (
    <Suspense fallback={<Loading />}>
        <ContainerTemperatureChart
            {...args}
        />
    </Suspense>
)


export const Default = Template.bind({})

Default.args = {
    serialNumber: '031-10532',
}

