import React from 'react'
import PropTypes from 'prop-types'
import {
    Avatar as AvatarM,
} from '@material-ui/core'

const propTypes = {
    data: PropTypes.string,
}

const defaultProps = {
    data: '',
}

const Avatar = ({
    data, ...rest
}) => {
    return (
        <AvatarM
            {...rest}
            alt="user photo"
            src={data || '/assets/images/avatars/profile.jpg'}
        />
    )
}

Avatar.propTypes = propTypes
Avatar.defaultProps = defaultProps

export default Avatar
