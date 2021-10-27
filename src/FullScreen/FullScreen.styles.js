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
            height: '100%',
            width: '100%',
            paddingTop: '2rem',
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
            top: '-6rem',
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
