import { addDecorator } from '@storybook/react'
import {
  initializeWorker,
  mswDecorator,
} from 'msw-storybook-addon'
import {
  createTheme,
  ThemeProvider,
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
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]