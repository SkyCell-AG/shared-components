import {
    makeStyles,
} from '@mui/styles'
import {
    useTheme,
} from '@mui/material/styles'

const useStyles = makeStyles(() => {
    const theme = useTheme()

    return {
        input: {
            padding: '6px 0 7px 0',
            fontWeight: theme.typography.body1.fontWeight,
            lineHeight: theme.typography.body1.lineHeight,
            color: theme.typography.body1.color,
            fontSize: theme.typography.body1.fontSize,
            width: '100%',
        },
        withoutUnderline: {
            padding: '7px 0 7px 0',
        },
        textField: {
            width: '100%',
            position: 'relative',
        },
        text: {
            padding: '2px 0 4px 0',
            margin: 0,
            color: theme.palette.secondary[600],
            fontSize: theme.typography.body1.fontSize,
        },
        fullHeightTextField: {
            height: '100%',
            marginBottom: 13,
        },
        fullHeight: {
            height: '100%',
        },
        rightAligned: {
            textAlign: 'right',
        },
        formControl: {
            width: '100%',
        },
        isRequired: {
            backgroundColor: theme.palette.primary[30],
        },
        disabled: {
            '& $requiredMark': {
                backgroundColor: 'transparent !important',
            },
        },
        disabledUnderline: {
            '&::before': {
                border: '0 !important',
            },
        },
        hideUnderline: {
            '&::before': {
                border: '0 !important',
            },
            '&::after': {
                border: '0 !important',
            },
        },
        requiredMark: {
            position: 'absolute',
            left: -8,
            backgroundColor: theme.palette.primary.main,
            width: 6,
            height: 26,
            borderRadius: 3,
        },
        errorMessage: {
            height: 10,
        },
        inputControl: {
            width: '100%',
        },
        inputMeasure: {
            position: 'absolute',
            top: 7,
            height: 0,
            color: theme.palette.secondary[600],
            fontSize: 16,
        },
        inputMeasureValue: {
            visibility: 'hidden',
        },
    }
})

export default useStyles
