import {
    makeStyles,
} from '@mui/styles'

const useStyles = makeStyles(() => {
    return {
        containerBtn: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            '@media print': {
                display: 'none',
            },
        },
        btnControl: {
            paddingTop: 20,
        },
    }
})

export default useStyles
