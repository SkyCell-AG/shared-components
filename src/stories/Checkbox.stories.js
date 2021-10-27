import React from 'react'
import {
    makeStyles,
} from '@mui/styles'

import Checkbox from 'Checkbox'

const useStyles = makeStyles({       
    label: {
        fontSize: '1.5rem',
        lineHeight: '1.5rem',
    },
  })

  const CheckboxStory = {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        value: {
            control: 'boolean',
        },
        title:{
            control: 'text'
        },
    },
}

const StyledCheckBox = (props) => {
    const classes = useStyles()

    return (
        <Checkbox 
            {...props}
            classes={{ label: classes.label }}
         />
    )
}

const Template = (props) => {
    return (
        <div>
            <Checkbox {...props} />
            <StyledCheckBox {...props} />
        </div>        
    )
}

export const Primary = Template.bind({})

Primary.args = {
    value: true,
    title: 'Test checkbox'
}

export default CheckboxStory
