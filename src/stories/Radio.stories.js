import React, { useState } from 'react'

import Radio from 'Radio'

const options = [
    { 
        value:'option1',
        label:'Option 1',
    },
    {
        value:'option2',
        label:'Option 2',
    },
    {
        value:'option3',
        label:'Option 3',
    }
]

const RadioStory = {
    title: 'Radio',
    component: Radio,
    argTypes: {
        title:{
            control: 'text'
        },
        showInColumns: {
            control: 'boolean',
        },
        value: {
            control: {
              disable: true,
            },
        },
    },
}

const Template = (props) => {
    const [value, setValue] = useState(props.value ?? '');
    return (
        <div>
            <Radio 
                {...props}
                options={options}
                onChange={(...params) => {
                    props.onChange(...params);
                    setValue(...params);
                }}
                value={value}
            />            
        </div>        
    )
}

export const Primary = Template.bind({})
Primary.args = {
    title: 'Default radio group',  
    showInColumns: false, 
}

export const Column = Template.bind({})
Column.args = {
    title: 'radio group in column view',
    showInColumns: true,
}

export default RadioStory
