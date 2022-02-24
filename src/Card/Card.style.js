import {
    makeStyles,
} from '@mui/styles'
import {
    useTheme,
} from '@mui/material/styles'

const useStyles = makeStyles(() => {
    const theme = useTheme()

    return {
        card: {
            background: theme.palette.common.white,
            boxShadow: `0px 1px 3px ${theme.palette.secondary.main}`,
            borderRadius: '4px',
            height: 'auto',
            overflow: 'visible !important',
            position: 'relative',
        },
        contentClass: {
            padding: 10,
        },
        fullHeight: {
            height: '100%',
        },
        title: {
            fontWeight: '400',
            fontSize: '20px !important',
            letterSpacing: '0.26px',
            color: theme.palette.secondary.dark,
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
    }
})

export default useStyles
