import {
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return {
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: theme.typography.h4.fontSize,
        },

        optionsWrapper: {
            display: 'flex',
            alignItems: 'center',
        },

        option: {
            cursor: 'pointer',
            padding: theme.spacing(0.625),
            width: 40,
            textAlign: 'center',
            transition: 'background-color 03:s',
            '&:hover': {
                backgroundColor: theme.palette.secondary[100],
            },
        },

        selectedOption: {
            backgroundColor: `${theme.palette.secondary[100]} !important`,
        },

        inputsWrapper: {
            display: 'flex',
        },

        input: {
            alignItems: 'center',
            marginLeft: theme.spacing(2.5),
        },

        datePicker: {
            marginLeft: theme.spacing(1.25),
        },
    }
})

export default useStyles
