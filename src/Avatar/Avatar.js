import React from 'react'
import PropTypes from 'prop-types'
import {
    Avatar as AvatarM,
} from '@material-ui/core'

import profile from './profile.jpg'

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
            src={img || profile}
        />
    )
}

Avatar.propTypes = propTypes
Avatar.defaultProps = defaultProps

export default Avatar
