import pick from 'lodash/pick'

const filterFieldForInput = (props) => {
    return pick(props, [
        'value',
        'name',
        'type',
        'onChange',
        'disabled',
        'autoFocus',
        'placeholder',
        'onFocus',
        'InputProps',
        'inputProps',
        'multiline',
        'classes',
        'rows',
        'autoComplete',
    ])
}

export default filterFieldForInput
