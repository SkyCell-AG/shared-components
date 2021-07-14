import React, {
    useRef,
    useCallback,
    useEffect,
} from 'react'
import PropTypes from 'prop-types'

import Loading from 'Loading'

import {
    useMediaDevices, useBarcodeReader,
} from './hooks'

import useStyles from './BarcodeReader.style'

const propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    decoder: PropTypes.func,
    onSubmit: PropTypes.func,
    skipButton: PropTypes.any, // eslint-disable-line react/forbid-prop-types
}

const defaultProps = {
    decoder: (code) => {
        return code
    },
    onSubmit: undefined,
    skipButton: undefined,
}

const BarcodeReader = ({
    label,
    onChange,
    decoder,
    onSubmit,
    skipButton: Component,
    ...rest
}) => {
    const classes = useStyles({
        ...rest,
    })
    const videoInput = useRef(null)

    const {
        cameraStream,
        cameraStreamRecieved,
        error: mediaDevicesError,
    } = useMediaDevices()

    const {
        decryptedData,
    } = useBarcodeReader({
        input: videoInput.current,
    })

    const onDecrypt = useCallback(() => {
        const {
            codeResult: {
                code,
            },
        } = decryptedData

        onChange({
            target: {
                value: decoder(code),
            },
        }, label)

        onSubmit?.()
    }, [
        decryptedData,
        onChange,
        label,
        decoder,
        onSubmit,
    ])

    useEffect(() => {
        if (videoInput && videoInput.current) {
            videoInput.current.srcObject = cameraStream
        }

        if (decryptedData && decryptedData.codeResult) {
            onDecrypt()
        }
    }, [
        videoInput,
        cameraStream,
        decryptedData,
        onDecrypt,
    ])

    if (mediaDevicesError) {
        return (
            <div>
                Choose file: Under construction...
            </div>
        )
    }

    if (!cameraStreamRecieved) {
        return <Loading />
    }

    return (
        <>
            <video // eslint-disable-line jsx-a11y/media-has-caption
                className={classes.videoInput}
                ref={videoInput}
                autoPlay
            />
            {
                Component && (
                    <div
                        className={classes.cameraControls}
                    >
                        <Component
                            className={classes.skipButton}
                            onClick={onSubmit}
                        />
                    </div>
                )
            }
        </>
    )
}

BarcodeReader.defaultProps = defaultProps
BarcodeReader.propTypes = propTypes

export default BarcodeReader
