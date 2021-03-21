import {
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(() => {
    return {
        wrapper: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
})

export default useStyles
