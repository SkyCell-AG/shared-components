import React from 'react'

import useStyles from './LoadingScreen.styles'

function LoadingScreen() {
    const classes = useStyles()

    return (
        <div className={classes.screen}>
            <div className={classes.center}>
                <div className={classes.logo}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 49.17 54.98"
                        width="128"
                        alt="logo"
                    >
                        <title>Logo_Skycell_picto</title>
                        <rect
                            className={classes.white}
                            width="49.17"
                            height="54.98"
                        />
                        <path
                            className={classes.blue}
                            d="M40.43,22.39V17.66L24.3,8.73l-16.1,9,0,19.6L24.31,46.2l16.1-9V22.39ZM32.64,32.53l-8.33,4.63L16,32.54V22.4l8.33-4.63,8.36,4.62Z"
                            transform="translate(0.09 0.25)"
                        />
                        <polygon
                            className={classes.red}
                            points="32.72 32.78 42.91 32.79 42.91 22.63 32.75 22.64 32.72 32.78"
                        />
                        <polygon
                            className={classes.white}
                            points="41.46 28.95 41.45 26.47 39.07 26.47 39.07 24.09 36.59 24.09 36.59 26.47 34.2 26.47 34.2 28.95 36.59 28.95 36.59 31.34 39.07 31.34 39.07 28.95 41.46 28.95"
                        />
                    </svg>
                </div>
                <div className={classes.spinnerWrapper}>
                    <div className={classes.spinner}>
                        <div className={classes.inner}>
                            <div className={classes.gap} />
                            <div className={classes.left}>
                                <div className={classes.halfCircleLeft} />
                            </div>
                            <div className={classes.right}>
                                <div className={classes.halfCircleRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LoadingScreen)
