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

        dateContainer: {
            display: 'flex',
            fontSize: '1.2rem',
        },

        editedDate: {
            color: 'silver',
        },

        dayPickerContainer: {
            display: 'none',
            position: 'absolute',
            width: '550px',
            marginLeft: '-310px',
        },

        dayPickerOpened: {
            display: 'block',
        },

        datePicker: {
            marginLeft: theme.spacing(1.25),
        },
    }
})

export default useStyles
