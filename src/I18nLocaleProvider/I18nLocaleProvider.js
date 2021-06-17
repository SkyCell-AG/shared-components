import React, {
    useEffect,
} from 'react'
import PropTypes from 'prop-types'
import {
    useAuth,
} from '@skycell-ag/auth'
import {
    useTranslation,
} from 'react-i18next'

const propTypes = {
    children: PropTypes.element.isRequired,
}

const I18nLocaleProvider = ({
    children,
}) => {
    const {
        user,
    } = useAuth()
    const {
        i18n,
    } = useTranslation()

    useEffect(() => {
        if (i18n.isInitialized) {
            i18n.changeLanguage(user?.attributes?.locale)
        }
    }, [
        i18n,
        user,
    ])

    return (
        <>
            {children}
        </>
    )
}

I18nLocaleProvider.propTypes = propTypes

export default I18nLocaleProvider
