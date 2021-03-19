import React, {
    useReducer,
    useEffect,
    useCallback,
} from 'react'
import PropTypes from 'prop-types'
import noop from 'lodash/noop'

import useRemoteData from 'hooks/useRemoteData'
import createReducer from 'utils/createReducer'

import Typeahead from './Typeahead'

const propTypes = {
    loadOptions: PropTypes.func.isRequired,
    loadLabel: PropTypes.func,
    value: PropTypes.string,
    valueField: PropTypes.string,
    labelField: PropTypes.string,
}
const defaultProps = {
    valueField: 'id',
    loadLabel: noop,
    value: '',
    labelField: '',
}

const OPEN_OPTIONS = 'OPEN_OPTIONS'
const CLOSE_OPTIONS = 'CLOSE_OPTIONS'
const SET_SEARCH_PHRASE = 'SET_SEARCH_PHRASE'

const reducer = createReducer({
    [SET_SEARCH_PHRASE]: (state, {
        searchPhrase,
    }) => {
        return {
            ...state,
            searchPhrase,
        }
    },
    [OPEN_OPTIONS]: (state) => {
        return {
            ...state,
            optionsVisible: true,
            searchPhrase: '',
        }
    },
    [CLOSE_OPTIONS]: (state) => {
        return {
            ...state,
            optionsVisible: false,
            searchPhrase: '',
        }
    },
})

const TypeaheadContainer = (props) => {
    const {
        loadOptions,
        loadLabel,
        value,
        labelField,
    } = props

    const [
        {
            optionsVisible,
            searchPhrase,
        },
        dispatch,
    ] = useReducer(reducer, {
        optionsVisible: false,
        searchPhrase: '',
    })

    const openOptions = useCallback(() => {
        dispatch({
            type: OPEN_OPTIONS,
        })
    }, [dispatch])

    const closeOptions = useCallback(() => {
        dispatch({
            type: CLOSE_OPTIONS,
        })
    }, [dispatch])

    const setSearchPhrase = useCallback((newSearchPhrase) => {
        dispatch({
            type: SET_SEARCH_PHRASE,
            searchPhrase: newSearchPhrase,
        })
    }, [dispatch])

    const [
        {
            data: options,
        },
        loadData,
    ] = useRemoteData(loadOptions)

    useEffect(() => {
        if (searchPhrase) {
            loadData(searchPhrase)
        }
    }, [
        loadData,
        searchPhrase,
    ])

    const getLabel = useCallback(() => {
        if (!value) {
            return Promise.resolve('')
        }
        const labels = loadLabel(value)

        if (!labels) {
            return Promise.resolve(value)
        }

        return labels.then(({
            data,
        }) => {
            const label = data[0][labelField]

            return label
        })
    }, [
        labelField,
        loadLabel,
        value,
    ])

    const [state] = useRemoteData(getLabel, true)

    return (
        <Typeahead
            {...props}
            {...state}
            value={state.data}
            setSearchPhrase={setSearchPhrase}
            searchPhrase={searchPhrase}
            options={options}
            closeOptions={closeOptions}
            optionsVisible={optionsVisible}
            openOptions={openOptions}
        />
    )
}

TypeaheadContainer.propTypes = propTypes
TypeaheadContainer.defaultProps = defaultProps

export default TypeaheadContainer
