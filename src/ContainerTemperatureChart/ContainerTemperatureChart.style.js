import {
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(() => {
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
            margin: 10,
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
