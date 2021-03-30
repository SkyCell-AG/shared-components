import {
    makeStyles,
} from '@material-ui/styles'

const useStyles = makeStyles({
    dateField: {
        position: 'relative',
    },
    input: {
        '& input': {
            cursor: 'pointer',
        },
    },
    requiredMark: {
        position: 'absolute',
        left: -8,
        width: 6,
        height: 26,
        backgroundColor: (theme) => { return theme.palette.primary.main },
        display: 'none',
        borderRadius: 3,
    },
    isRequired: {
        '& $requiredMark': {
            display: 'block',
        },
        '& .MuiInputBase-input': {
            backgroundColor: (theme) => { return theme.palette.primary[30] },
        },
    },
    disabled: {
        '& $requiredMark': {
            backgroundColor: 'transparent !important',
        },
        '& .MuiInputBase-input': {
            backgroundColor: 'transparent !important',
        },
        '& .MuiInput-underline:before': {
            border: '0 !important',
        },
    },
    errorMessage: {
        height: 10,
    },
})

export default useStyles
