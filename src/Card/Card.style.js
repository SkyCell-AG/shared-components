import {
    makeStyles,
} from '@material-ui/styles'  // eslint-disable-line

const useStyles = makeStyles({
    card: {
        background: (theme) => { return theme.palette.common.white },
        boxShadow: (theme) => { return `0px 1px 3px ${theme.palette.secondary.main}` },
        borderRadius: '4px',
        height: 'auto',
        overflow: 'visible !important',
        position: 'relative',
    },
    fullHeight: {
        height: '100%',
    },
    title: {
        fontWeight: '400',
        fontSize: '20px !important',
        letterSpacing: '0.26px',
        color: (theme) => { return theme.palette.secondary.dark },
        display: 'flex',
    },
    icon: {
        padding: '5px 0 0 5px',
        width: '30px',
        height: '26px',
        position: 'relative',
        top: '4px',
    },
    loading: {
        position: 'relative',
        marginLeft: 6,
        width: 15,
    },
})

export default useStyles
