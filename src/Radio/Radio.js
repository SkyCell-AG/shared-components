import React, {
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
    FormControlLabel,
    RadioGroup,
    Radio as MaterialRadio,
} from '@mui/material'

import Label from 'Label'

import InputSingleLine from 'InputSingleLine'
import useStyles from './Radio.style'

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
    required: PropTypes.bool,
    isReadOnly: PropTypes.bool,
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
    required: false,
    isReadOnly: false,
}

const Radio = ({
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
    required,
    isReadOnly,
    ...rest
}) => {
    const classes = useStyles(rest)

    const handleOnChange = useCallback((event) => {
        onChange(event.target.value, event)
    }, [onChange])

    if (isReadOnly) {
        return (
            <>
                {title && (<Label title={title} />)}
                <InputSingleLine
                    value={value}
                    disabled
                />
            </>
        )
    }

    return (
        <>
            {title && (<Label title={title} />)}
            <div className={clsx(className,
                {
                    [classes.isRequired]: required,
                })}
            >
                <div className={classes.requiredMark} />
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
                                classes={{
                                    label: classes.radioItemLabel,
                                }}
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
            </div>
        </>
    )
}

Radio.propTypes = propTypes
Radio.defaultProps = defaultProps

export default Radio
