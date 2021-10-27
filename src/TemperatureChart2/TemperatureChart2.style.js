import {
    makeStyles,
} from '@mui/styles'
import {
    useTheme,
} from '@mui/material/styles'

const useStyles = makeStyles(() => {
    const theme = useTheme()

    return {
        wrapper: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
        },
        chart: {
            width: '100%',
            height: '575px',
        },
        chartPrinting: {
            width: 1020,
            height: 550,
        },
        fullscreen: {
            position: 'absolute',
            height: '85%',
            width: '100%',
        },
        overlay: {
            flexGrow: 1,
            display: 'flex',
            zIndex: '100 !important',
            width: '90%',
            height: '75%',
            backgroundColor: theme.palette.common.white,
            alignItems: 'center',
            justifyContent: 'center',
        },
        noData: {
            backgroundColor: theme.palette.common.white,
        },
        msg: {
            display: 'flex',
            alignItems: 'center',
        },
        middle: {
            margin: 0,
        },
    }
})

export default useStyles
