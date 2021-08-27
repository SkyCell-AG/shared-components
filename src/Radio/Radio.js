import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
    FormControlLabel,
    RadioGroup,
    Radio as MaterialRadio,
} from '@material-ui/core'

import Label from 'Label'

import useStyles from './Radio.styles'

const propTypes = {
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
    })),
    name: PropTypes.string,
    value: PropTypes.string,
    compact: PropTypes.bool,
    small: PropTypes.bool,
    className: PropTypes.string,
    showInColumns: PropTypes.bool,
}

const defaultProps = {
    disabled: false,
    title: '',
    options: [],
    value: '',
    name: 'labelType',
    compact: false,
    small: false,
    className: '',
    showInColumns: false,
}

const Radio = (props) => {
    const {
        onChange,
        disabled,
        title,
        options,
        name,
        value,
        compact,
        small,
        className,
        showInColumns,
    } = props

    const classes = useStyles()

    const handleOnChange = useCallback((event) => {
        onChange(event.target.value, event)
    }, [onChange])

    return (
        <>
            <Label title={title} />
            <RadioGroup
                aria-label="labelType"
                name={name}
                value={value}
                className={clsx({
                    [classes.radio]: true,
                    [className]: true,
                    [classes.showInColumns]: showInColumns,
                })}
                onChange={handleOnChange}
                disabled={disabled}
                data-testid={`radio-${name}`}
            >
                {options.map((radio) => {
                    return (
                        <FormControlLabel
                            key={`radio-${radio.value}`}
                            value={radio.value}
                            className={clsx({
                                [classes.formControlStyle]: true,
                                [classes.radioSmall]: small,
                            })}
                            control={(
                                <MaterialRadio
                                    color="primary"
                                    classes={{
                                        root: compact && classes.radioRoot,
                                    }}
                                />
                            )}
                            data-value={radio.value}
                            label={radio.label}
                            disabled={disabled}
                        />
                    )
                })}
            </RadioGroup>
        </>
    )
}

Radio.propTypes = propTypes
Radio.defaultProps = defaultProps

export default Radio
