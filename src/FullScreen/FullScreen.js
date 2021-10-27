import React, {
    useRef,
    useCallback,
    useState,
    useEffect,
} from 'react'
import noop from 'lodash/noop'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'

import useStyles from './FullScreen.styles'

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.element.isRequired,
    onFullScreen: PropTypes.func,
    setTemperatureChartFullscreen: PropTypes.func,
}

const defaultProps = {
    className: '',
    onFullScreen: noop,
    setTemperatureChartFullscreen: noop,
}

const FullScreen = ({
    className,
    children,
    onFullScreen,
    setTemperatureChartFullscreen,
}) => {
    const classes = useStyles()
    const wrapper = useRef(null)
    const [
        fullScreen,
        setFullScreen,
    ] = useState(false)

    const requestFullScreen = useCallback(() => {
        let prevented = false
        const event = {
            preventDefault: () => {
                prevented = true
            },
        }

        onFullScreen(event)
        if (prevented) {
            return
        }

        if (fullScreen) {
            document.exitFullscreen()
        } else {
            wrapper.current.requestFullscreen({
                navigationUI: 'show',
            }).then({})
        }
    }, [
        fullScreen,
        onFullScreen,
    ])

    const onFullScreenChange = useCallback(() => {
        setFullScreen(document.fullscreenElement)
        setTemperatureChartFullscreen(document.fullscreenElement)
        if (document.fullscreenElement) {
            document.body.classList.add(classes.fullscreen)
            const chartContainer = document.querySelector(`.${classes.children}`)

            chartContainer.style.display = 'flex'
            chartContainer.style.alignItems = 'center'
            chartContainer.style.height = '100%'
        } else {
            document.body.classList.remove(classes.fullscreen)

            const chartContainer = document.querySelector(`.${classes.children}`)

            chartContainer.style.display = ''
            chartContainer.style.alignItems = ''
            chartContainer.style.height = ''
        }
    }, [
        classes.children,
        classes.fullscreen,
        setTemperatureChartFullscreen,
    ])

    useEffect(() => {
        const currentWrapper = wrapper.current

        currentWrapper.addEventListener('fullscreenchange', onFullScreenChange)
        return () => {
            currentWrapper.removeEventListener('fullscreenchange', onFullScreenChange)
        }
    }, [onFullScreenChange])

    return (
        <div
            className={clsx(
                className,
                classes.wrapper,
            )}
            ref={wrapper}
        >
            <div
                className={fullScreen
                    ? classes.fullScreenButtonClose
                    : classes.fullScreenButtonOpen}
                onMouseDown={requestFullScreen}
            >
                {fullScreen ? (
                    <FullscreenExitIcon />
                ) : (
                    <FullscreenIcon />
                )}
            </div>
            <div
                className={classes.children}
            >
                {children}
            </div>
        </div>
    )
}

FullScreen.propTypes = propTypes
FullScreen.defaultProps = defaultProps

export default FullScreen
