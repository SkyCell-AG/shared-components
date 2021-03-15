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
    img, ...rest
}) => {
    return (
        <AvatarM
            {...rest}
            alt="user photo"
            src={img || '/assets/icons/profile.svg'}
        />
    )
}

Avatar.propTypes = propTypes
Avatar.defaultProps = defaultProps

export default Avatar
