import React from 'react'
import Auth from '@skycell-ag/auth'
import I18nLocaleProvider from 'I18nLocaleProvider'
import {
    useTranslation,
} from 'react-i18next'

const LocaleStory = {
    title: 'I18nLocaleProvider',
    component: I18nLocaleProvider,   
}

const AppWithLocalization = () => {    
    const {
        t,
    } = useTranslation()
    return (
        <div>
           <div>Here would be text translated depending of current user locale:</div>
           <div>{t('SomeLocalizedKey')}</div>
        </div>
    )
}

export const Default = () => {
    return (
      <Auth>
            <I18nLocaleProvider>            
                <AppWithLocalization />
            </I18nLocaleProvider>
        </Auth>
       
    )
}

export default LocaleStory
