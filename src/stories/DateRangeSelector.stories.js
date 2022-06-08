import React, {useState} from 'react'

import {dateToStr} from 'utils/DateUtils'
import DateRangeSelector from 'DateRangeSelector'

const DateRangeSelectorStory = {
    title: 'DateRangeSelector',
    component: DateRangeSelector,
    argTypes: {
    },
}

const Template = (props) => {
    const [curValue, setValue] = useState(props.value)

    return (
            <DateRangeSelector
                {...props}
                value={curValue}
                onChange={(val) => {
                    console.log('------------------------')
                    console.log('Stories onChange handler with value =', val)
                    console.log('Stories onChange handler with value.from =', val.from? dateToStr(val.from): val.from)
                    console.log('Stories onChange handler with value.to =',val.to ?  dateToStr(val.to) : val.to)                    
                    console.log('------------------------')
                    setValue(val)
                }}
                setDateRange={(params)=>{
                    console.log('what is this for params=?', params)
                }}
            />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    value: {
        from: new Date().getTime() - 3 * 24 * 60 * 60 * 1000,
        to: new Date().getTime(),
    },
    showTimeRange: true,
    mini: false,
}

export const StringValues = Template.bind({})
StringValues.args = {
    value: {
        from: '01.06.2012 00:00 +0300',
        to: '07.06.2022 23:59 +0300',
    },
    showTimeRange: true,
    mini: false,
}


export const EmptyValues = Template.bind({})
EmptyValues.args = {
    value: {
        from: null,
        to: null,
    },
    showTimeRange: true,
    mini: false,
}

export default DateRangeSelectorStory
