import {
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return {
        root: {},
        optionsWrapper: {
            zIndex: 1000,
            position: 'relative',
            display: 'none',
            '&.active': {
                display: 'block',
            },
        },
        options: {
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            border: `1px solid ${theme.palette.secondary[200]}`,
            background: theme.palette.common.white,
            height: 200,
            overflow: 'auto',
        },
        option: {
            textAlign: 'left',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            fontWeight: theme.typography.body1.fontWeight,
            lineHeight: theme.typography.body1.lineHeight,
            color: theme.typography.body1.color,
            fontSize: theme.typography.body1.fontSize,
            padding: theme.spacing(1),
            '&:hover': {
                background: theme.palette.primary[30],
            },
        },
    }
})

export default useStyles
