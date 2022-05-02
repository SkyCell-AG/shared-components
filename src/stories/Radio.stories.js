import React, { useState } from 'react'
import {
    makeStyles,
} from '@mui/styles'

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

const useStyles = makeStyles({       
    radioItemLabel: {
        fontSize: '1.5rem',
        lineHeight: '1.5rem',
    },
  })

  const StyledRadio = (props) => {
    const [value, setValue] = useState(props.value ?? '');
    const classes = useStyles()
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
                classes={{ radioItemLabel: classes.radioItemLabel }}
            />            
        </div>        
    )
}

export const Primary = Template.bind({})
Primary.args = {
    title: 'Default radio group',  
    showInColumns: false, 
    value: 'option2',
    isReadOnly: false,
}

export const Column = Template.bind({})
Column.args = {
    title: 'radio group in column view',
    showInColumns: true,
}

export const NoTitleCustomStyle = StyledRadio.bind({})
NoTitleCustomStyle.args = {    
    showInColumns: true,
}

export const Required = Template.bind({})
Required.args = {
    title: 'required radio group',
    required: true,
}

export default RadioStory
