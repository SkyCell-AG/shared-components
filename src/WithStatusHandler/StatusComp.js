import React from 'react'
import PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'

import {
    PRISTIN,
    PENDING,
    FAILURE,
    requestType,
} from 'utils/requestStatuses'
import Loading from 'Loading'

const propTypes = {
    err: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    status: requestType.isRequired,
    Comp: PropTypes.func.isRequired,
    FailureMessage: PropTypes.func,
    className: PropTypes.string,
}

const defaultProps = {
    err: '',
    FailureMessage: null,
    className: '',
}

const StatusComp = (props) => {
    const {
        status,
        err,
        Comp,
        FailureMessage,
        className,
    } = props

    if (status === PENDING || status === PRISTIN) {
        return <Loading className={className} />
    }

    if (status === FAILURE) {
        if (FailureMessage) {
            return (
                <FailureMessage {...props} />
            )
        }

        return (
            <Alert severity="error">
                {JSON.stringify(err)}
            </Alert>
        )
    }

    return <Comp {...props} />
}

StatusComp.propTypes = propTypes
StatusComp.defaultProps = defaultProps

export default StatusComp
