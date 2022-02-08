import {
    makeStyles,
} from '@mui/styles'
import {
    useTheme,
} from '@mui/material/styles'

const useStyles = makeStyles(() => {
    const theme = useTheme()

    return {
        radio: {
            width: '100%',
            justifyContent: 'flex-start',
            display: 'flex',
            flexDirection: 'row',
            whiteSpace: 'nowrap',
            paddingLeft: '0px !important',
            paddingRight: '0px !important',
        },
        radioRoot: {
            padding: '1px 3px !important',
        },
        radioSmall: {
            fontSize: `${theme.typography.button.fontSize}px !important`,
            marginRight: theme.spacing(0),
            marginLeft: '0 !important',
        },
        formControlStyle: {
            marginLeft: theme.spacing(-0.625),
        },
        showInColumns: {
            flexDirection: 'column',
        },
        radioItemLabel: {},
        requiredMark: {
            position: 'absolute',
            left: -9,
            width: 6,
            height: 27,
            backgroundColor: theme.palette.primary.main,
            display: 'none',
            borderRadius: 3,
        },
        isRequired: {
            '& $requiredMark': {
                display: 'block',
            },
            backgroundColor: theme.palette.primary[30],
        },
    }
})

export default useStyles
