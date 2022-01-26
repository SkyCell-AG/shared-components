import React, {useState} from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import DateRangeSelector from 'DateRangeSelector'

const DateRangeSelectorStory = {
    title: 'DateRangeSelector',
    component: DateRangeSelector,
    argTypes: {},
}

const Template = (props) => {
    const [curValue, setValue] = useState(props.value)

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangeSelector
                {...props}
                value={curValue}
                onChange={(val) => {
                    console.log('val', val)
                    setValue(val)
                }}
            />
        </LocalizationProvider>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    value: {
        from: new Date().getTime() - 3 * 24 * 60 * 60 * 1000,
        to: new Date().getTime(),
    },
    showTimeRange: true,
    setDateRange: console.log,
    onChange: console.log,
}

export const Mini = Template.bind({})

Mini.args = {
    value: {
        from: new Date().getTime() - 3 * 24 * 60 * 60 * 1000,
        to: new Date().getTime(),
    },
    mini: true,
    showTimeRange: true,
    setDateRange: console.log,
    onChange: console.log,
}

export default DateRangeSelectorStory
