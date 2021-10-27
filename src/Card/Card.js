import React from 'react'
import {
    Card as MaterialCard,
    CardContent,
    Typography,
    Icon,
} from '@mui/material'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import {
    PENDING,
} from 'utils/requestStatuses'
import Loading from 'Loading'

import useStyles from './Card.style'

const propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
    contentClass: PropTypes.string,
    titleClass: PropTypes.string,
    fullHeight: PropTypes.bool,
    status: PropTypes.string,
}

const defaultProps = {
    className: '',
    contentClass: '',
    titleClass: '',
    title: '',
    icon: '',
    fullHeight: false,
    status: '',
}

const Card = (props) => {
    const classes = useStyles()
    const {
        children,
        title,
        icon,
        className,
        contentClass,
        titleClass,
        fullHeight,
        status,
    } = props

    return (
        <MaterialCard
            className={clsx(classes.card, className, {
                [classes.fullHeight]: fullHeight,
            })}
        >
            <CardContent className={contentClass}>
                {title
                    && (
                        <Typography className={clsx(classes.title, titleClass)}>
                            {title}
                            {icon
                                && (
                                    <Icon className={classes.icon}>{icon}</Icon>
                                )}
                            {status === PENDING
                                && (
                                    <div className={classes.loading}>
                                        <Loading
                                            size={15}
                                            color="inherit"
                                        />
                                    </div>
                                )}
                        </Typography>
                    )}
                {children}
            </CardContent>
        </MaterialCard>
    )
}

Card.propTypes = propTypes
Card.defaultProps = defaultProps

export default Card
