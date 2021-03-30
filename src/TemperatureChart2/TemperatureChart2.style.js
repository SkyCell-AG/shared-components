import {
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return {
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
        },
        chart: {
            height: 575,
        },
        chartPrinting: {
            width: 1020,
            height: 550,
        },
        fullscreen: {
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
