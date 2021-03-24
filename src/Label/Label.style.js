import {
    makeStyles,
} from '@material-ui/styles' // eslint-disable-line

const useStyles = makeStyles({
    label: {
        color: (theme) => { return theme.palette.secondary[400] },
        whiteSpace: 'nowrap',
        paddingTop: (theme) => { return theme.spacing(1) },
        display: 'block',
    },
})

export default useStyles
