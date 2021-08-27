import {
    makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => {
    return {
        radio: {
            width: '100%',
            justifyContent: 'flex-start',
            display: 'flex',
            flexDirection: 'row',
            whiteSpace: 'nowrap',
            paddingLeft: '0px !important',
            paddingRight: '0px !important',
        },
        radioRoot: {
            padding: '1px 3px !important',
        },
        radioSmall: {
            fontSize: `${theme.typography.button.fontSize}px !important`,
            marginRight: theme.spacing(0),
            marginLeft: '0 !important',
        },
        formControlStyle: {
            marginLeft: theme.spacing(-0.625),
        },
        showInColumns: {
            flexDirection: 'column',
        },
        radioItemLabel: {},
    }
})

export default useStyles
