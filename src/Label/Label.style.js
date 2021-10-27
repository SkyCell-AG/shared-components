import {
    makeStyles,
} from '@mui/styles'
import {
    useTheme,
} from '@mui/material/styles' // eslint-disable-line

const useStyles = makeStyles(() => {
    const theme = useTheme()

    return {
        label: {
            color: theme.palette.secondary[400],
            whiteSpace: 'nowrap',
            paddingTop: theme.spacing(1),
            display: 'block',
        },
    }
})

export default useStyles
