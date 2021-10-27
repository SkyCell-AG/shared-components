import {
    makeStyles,
} from '@mui/styles'
import {
    useTheme,
} from '@mui/material/styles'

const useStyles = makeStyles(() => {
    const theme = useTheme()

    return {
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column',
            minWidth: 120,
        },
        button: {
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: theme.typography.body1.fontSize,
            fontFamily: theme.typography.fontFamily,
            height: 36,
            fontWeight: theme.typography.body1.fontWeight,
            letterSpacing: 1.25,
            borderRadius: 4,
            padding: `0px ${theme.spacing(0.5)}px`,
        },
        buttonPrimary: {
            background: theme.palette.primary[200],
            boxShadow: `0px 1px 3px ${theme.palette.secondary[400]}`,
            color: theme.palette.common.white,
        },
        buttonSecondary: {
            background: theme.palette.common.white,
            border: `1px solid ${theme.palette.primary[200]}`,
            color: theme.palette.primary[200],
        },
        disabled: {
            opacity: 0.5,
        },
        buttonTitle: {
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.button.fontSize,
            fontWeight: theme.typography.button.fontWeight,
            letterSpacing: theme.typography.button.letterSpacing,
        },
        buttonTitleUppercase: {
            textTransform: 'uppercase',
        },
    }
})

export default useStyles
