import {
    useReducer,
    useCallback,
    useEffect,
    useRef,
} from 'react'

import generateAsyncActions from 'utils/generateAsyncActions'
import createReducer from 'utils/createReducer'
import createCancelablePromise from 'utils/createCancelablePromise'
import {
    PRISTIN,
    PENDING,
    SUCCESS,
    FAILURE,
} from 'utils/requestStatuses'

const LOAD = generateAsyncActions('LOAD')

const initState = {
    data: undefined,
    err: undefined,
    status: PRISTIN,
}

const reducer = createReducer({
    [LOAD.pending]: (state) => {
        return {
            ...state,
            status: PENDING,
        }
    },
    [LOAD.success]: (state, {
        payload: {
            data,
        },
    }) => {
        return {
            ...state,
            status: SUCCESS,
            data,
        }
    },
    [LOAD.failure]: (state, {
        err,
    }) => {
        return {
            ...state,
            status: FAILURE,
            err,
        }
    },
})

const useRemoteData = (
    load,
    wantToLoad = false,
) => {
    const [
        state,
        dispatch,
    ] = useReducer(reducer, initState)

    const cancelRequest = useRef(null)

    const loadData = useCallback((...params) => {
        dispatch({
            type: LOAD.pending,
        })

        const [
            request,
            cancel,
        ] = createCancelablePromise(load(...params))

        cancelRequest.current = cancel

        request.then((data) => {
            cancelRequest.current = null
            dispatch({
                type: LOAD.success,
                payload: {
                    data,
                },
            })
        }).catch((err) => {
            if (err.message === 'canceled') {
                return
            }

            dispatch({
                type: LOAD.failure,
                err,
            })
        })
    }, [
        dispatch,
        load,
    ])

    useEffect(() => {
        if (cancelRequest.current) {
            cancelRequest.current()
        }
        return () => {
            if (cancelRequest.current) {
                cancelRequest.current()
            }
        }
    }, [loadData])

    useEffect(() => {
        if (wantToLoad) {
            loadData()
        }
    }, [
        loadData,
        wantToLoad,
    ])

    return [
        state,
        loadData,
    ]
}

export default useRemoteData
