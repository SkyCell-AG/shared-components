import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Checkbox from 'Checkbox'

const useStyles = makeStyles({       
    label: {
        fontSize: '24px',
        lineHeight: '29px',
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
