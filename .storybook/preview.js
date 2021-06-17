import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles'
import skyTheme from '@skycell-ag/theme'

import i18n from './i18n'; // eslint-disable-line

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const theme = createMuiTheme(skyTheme)

const withThemeProvider = (Story) => {
  return (
        <MuiThemeProvider theme={theme}>
          <Story />
        </MuiThemeProvider>
  )
}

export const decorators = [withThemeProvider]