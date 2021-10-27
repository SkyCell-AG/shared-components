import {
    makeStyles,
} from '@mui/styles'

const useStyles = makeStyles(() => {
    return {
        '@keyframes outerRotate': {
            '0%': {
                transform: 'rotate(0deg) scale(0.5)',
            },

            '100%': {
                transform: 'rotate(360deg) scale(0.5)',
            },
        },

        '@keyframes leftWobble': {

            '0%': {},
            '100%': {
                transform: 'rotate(130deg)',
            },

            '50%': {
                transform: 'rotate(-5deg)',
            },
        },

        '@keyframes rightWobble': {

            '0%': {},
            '100%': {
                transform: 'rotate(-130deg)',
            },

            '50%': {
                transform: 'rotate(5deg)',
            },
        },

        '@keyframes sporadicRotate': {
            '12.5%': {
                transform: 'rotate(135deg)',
            },

            '25%': {
                transform: 'rotate(270deg)',
            },

            '37.5%': {
                transform: 'rotate(405deg)',
            },

            '50%': {
                transform: 'rotate(540deg)',
            },

            '62.5%': {
                transform: 'rotate(675deg)',
            },

            '75%': {
                transform: 'rotate(810deg)',
            },

            '87.5%': {
                transform: 'rotate(945deg)',
            },

            '100%': {
                transform: 'rotate(1080deg)',
            },
        },
        screen: {
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            zIndex: 99999,
            pointerEvents: 'none',
        },

        center: {
            display: 'block',
            width: '100%',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
        },

        logo: {
            width: 128,
            margin: '0 auto',
        },

        spinnerWrapper: {
            display: 'block',
            position: 'relative',
            width: '100%',
            minHeight: 100,
            height: 100,
        },

        spinner: {
            position: 'absolute',
            overflow: 'hidden',
            left: '50%',
            marginLeft: -50,
            animation: '$outerRotate 2.91667s linear infinite',
        },

        inner: {
            width: 100,
            height: 100,
            position: 'relative',
            animation: '$sporadicRotate 5.25s cubic-bezier(0.35, 0, 0.25, 1) infinite',
        },

        gap: {
            position: 'absolute',
            left: 49,
            right: 49,
            top: 0,
            bottom: 0,
            borderTop: '10px solid',
            boxSizing: 'border-box',
        },

        left: {
            position: 'absolute',
            top: 0,
            height: 100,
            width: 50,
            overflow: 'hidden',
            left: 0,
        },
        right: {
            position: 'absolute',
            top: 0,
            height: 100,
            width: 50,
            overflow: 'hidden',
            right: 0,
        },

        halfCircleLeft: {
            left: 0,
            animation: '$leftWobble 1.3125s cubic-bezier(0.35, 0, 0.25, 1) infinite',
            '-webkit-animation': '$leftWobble 1.3125s cubic-bezier(0.35, 0, 0.25, 1) infinite',
            position: 'absolute',
            top: 0,
            width: 100,
            height: 100,
            boxSizing: 'border-box',
            border: '10px solid #6FCAE9',
            borderBottomColor: 'transparent',
            borderRightColor: 'transparent',
            borderRadius: '50%',
        },

        halfCircleRight: {
            right: 0,
            animation: '$rightWobble 1.3125s cubic-bezier(0.35, 0, 0.25, 1) infinite',
            '-webkit-animation': '$rightWobble 1.3125s cubic-bezier(0.35, 0, 0.25, 1) infinite',
            position: 'absolute',
            top: 0,
            width: 100,
            height: 100,
            boxSizing: 'border-box',
            border: '10px solid #6FCAE9',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRadius: '50%',
        },
        white: {
            fill: '#fff',
        },
        blue: {
            fill: '#62c6e9',
        },
        red: {
            fill: '#e63329',
        },
    }
})

export default useStyles
