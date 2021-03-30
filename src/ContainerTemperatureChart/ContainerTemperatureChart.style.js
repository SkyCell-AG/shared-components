import {
    makeStyles,
} from '@material-ui/styles'

const useStyles = makeStyles((theme) => {
    return {
        wrapper: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            userSelect: 'none',
            width: '100%',
            height: '100%',
            padding: 0,
        },
        progres: {
            margin: theme.spacing(0.25),
        },
        loading: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        chartContainer: {
            position: 'relative',
            width: '100%',
            height: '100%',
        },
    }
})

export default useStyles
