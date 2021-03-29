import {
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return {
        wrapper: {
            position: 'relative',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            background: theme.palette.common.white,
        },
        fullScreenButtonClose: {
            top: 20,
            right: 20,
            zIndex: 1,
            position: 'absolute',
            opacity: 0.2,
            cursor: 'pointer',
        },
        fullScreenButtonOpen: {
            zIndex: 1,
            position: 'absolute',
            right: 0,
            top: -100,
            opacity: 0.2,
            cursor: 'pointer',
        },
        children: {
            height: '100%',
            width: '98%',
        },

    }
})

export default useStyles
