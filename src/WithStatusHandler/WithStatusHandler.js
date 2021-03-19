import React from 'react'

import StatusComp from './StatusComp'

const WithStatusHandler = (arg1) => {
    if (typeof arg1 === 'function') {
        return (props) => {
            return (
                <StatusComp
                    {...props}
                    Comp={arg1}
                />
            )
        }
    }

    const {
        FailureMessage,
    } = arg1

    return (Comp) => {
        return (props) => {
            return (
                <StatusComp
                    {...props}
                    Comp={Comp}
                    FailureMessage={FailureMessage}
                />
            )
        }
    }
}

export default WithStatusHandler
