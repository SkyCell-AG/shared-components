import {
    makeStyles,
} from '@mui/styles'

const useStyles = makeStyles(() => {
    return {
        videoInput: {
            display: 'flex',
            height: '100%',
            width: '100%',
            objectFit: 'cover',
        },
        cameraControls: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 30,
            width: '100%',
            position: 'relative',
        },
        skipButton: {
            position: 'absolute',
            right: 10,
            top: 10,
        },
    }
})

export default useStyles
