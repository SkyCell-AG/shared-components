import React from 'react'
import { addDecorator } from '@storybook/react'
import {
  initializeWorker,
  mswDecorator,
} from 'msw-storybook-addon'
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import MomentUtils from '@date-io/moment'

import skyTheme from '@skycell-ag/theme'

import initI18n from './i18n'

initI18n()

initializeWorker()
addDecorator(mswDecorator)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const theme = createTheme(skyTheme)

const withThemeProvider = (Story) => {
  return (
    <React.StrictMode>
      <LocalizationProvider 
      dateAdapter={MomentUtils}
      locale="en-gb">
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </LocalizationProvider >
      </React.StrictMode>
  )
}

export const decorators = [withThemeProvider]