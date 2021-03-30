import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles'
import skyTheme from '@skycell-ag/theme'

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