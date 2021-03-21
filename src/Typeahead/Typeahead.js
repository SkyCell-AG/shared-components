import React, {
    useCallback,
    useMemo,
} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import noop from 'lodash/noop'
import omit from 'lodash/omit'
import delay from 'lodash/delay'

import InputSingleLine from 'InputSingleLine'
import WithStatusHandler from 'WithStatusHandler'

import useStyles from './Typeahead.styles'

const propTypes = {
    searchPhrase: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    onChange: PropTypes.func,
    title: PropTypes.string,
    setSearchPhrase: PropTypes.func.isRequired,
    options: (props, propName, componentName) => {
        const {
            options,
            labelField,
            valueField,
        } = props

        if (!Array.isArray(options)) {
            return new Error(`Invalid prop ${propName} in Component ${componentName} need to be an array`)
        }

        const notValidElementIndex = options.findIndex((option) => {
            return !(option[labelField] && option[valueField])
        })

        if (notValidElementIndex !== -1) {
            return new Error(`Invalid element with index ${notValidElementIndex} in prop ${propName} in Component ${componentName}.`)
        }

        return null
    },
    optionsVisible: PropTypes.bool.isRequired,
    labelField: PropTypes.string.isRequired,
    valueField: PropTypes.string.isRequired,
    openOptions: PropTypes.func.isRequired,
    closeOptions: PropTypes.func.isRequired,
    variant: PropTypes.oneOf([
        'standard',
        'outlined',
        'filled',
    ]),
    classNames: PropTypes.shape({
        options: PropTypes.string,
    }),
    className: PropTypes.string,
}

const defaultProps = {
    value: null,
    name: '',
    onChange: noop,
    options: [],
    title: '',
    variant: 'outlined',
    classNames: {},
    className: '',
}

const removeFields = (obj) => {
    return omit(obj, [
        'value',
        'Comp',
        'valueField',
        'labelField',
        'loadLabel',
        'loadOptions',
        'options',
        'loadAirports',
        'className',
    ])
}
const Typeahead = (props) => {
    const {
        onChange,
        options,
        openOptions,
        optionsVisible,
        setSearchPhrase,
        closeOptions,
        searchPhrase,
        valueField,
        labelField,
        variant,
        value,
        name,
        classNames,
        className,
    } = props

    const classes = useStyles()

    const onOptionClick = useCallback((event) => {
        const {
            target: {
                dataset: {
                    value: newValue,
                },
            },
        } = event

        onChange(newValue, {
            target: {
                name,
                value: newValue,
            },
        })
        closeOptions()
    }, [
        closeOptions,
        name,
        onChange,
    ])

    const onEnterPress = useCallback((event) => {
        const {
            key,
        } = event

        if (optionsVisible && key === 'Enter') {
            onChange(options[0].id, {
                target: {
                    name,
                    value: options[0].id,
                },
            })
            closeOptions()
        }
    }, [
        closeOptions,
        name,
        onChange,
        options,
        optionsVisible,
    ])

    const onBlur = useMemo(() => {
        return () => {
            return delay(closeOptions, 300)
        }
    }, [closeOptions])

    return (
        <div
            className={clsx(classes.root, className)}
        >
            <InputSingleLine
                {...removeFields(props)}
                onChange={setSearchPhrase}
                value={optionsVisible ? searchPhrase : value}
                onKeyPress={onEnterPress}
                onFocus={openOptions}
                onBlur={onBlur}
                variant={variant}
                autoComplete="off"
            />
            <div className={
                clsx(
                    classes.optionsWrapper,
                    optionsVisible && 'active',
                )
            }
            >
                {options.length > 0 && (
                    <div className={clsx(classes.options, classNames.options)}>
                        {options.map((option) => {
                            return (
                                <button
                                    type="button"
                                    key={`option-${option[valueField]}`}
                                    onClick={onOptionClick}
                                    className={classes.option}
                                    data-value={option[valueField]}
                                >
                                    {option[labelField]}
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

Typeahead.propTypes = propTypes
Typeahead.defaultProps = defaultProps

export default WithStatusHandler(Typeahead)
