import { addDecorator } from '@storybook/react'
import {
  initializeWorker,
  mswDecorator,
} from 'msw-storybook-addon'
import {
  createTheme,
  MuiThemeProvider,
} from '@mui/material/styles'

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
        <MuiThemeProvider theme={theme}>
          <Story />
        </MuiThemeProvider>
  )
}

export const decorators = [withThemeProvider]