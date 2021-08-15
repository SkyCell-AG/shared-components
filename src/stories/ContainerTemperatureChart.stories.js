import React from 'react'
import {
    RelayEnvironmentProvider,
} from 'react-relay/hooks'
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import {
    graphql,
} from 'msw'

import ContainerTemperatureChart from 'ContainerTemperatureChart'
import RelayEnvironment from 'RelayEnvironment'

export default {
    parameters: {
        msw: [
            graphql.query('ContainerChartQuery', (_req, res, ctx) => {
                return res(ctx.data({}))
            })
        ]
    },
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
    title: 'ContainerTemperatureChart',
}

const Template = args => (
    <ContainerTemperatureChart
        {...args}
    />
)

export const Default = Template.bind({})

Default.args = {
    serialNumber: '031-10532',
}

