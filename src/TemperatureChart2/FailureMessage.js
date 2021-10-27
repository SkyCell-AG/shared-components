import React from 'react'
import {
    Grid,
} from '@mui/material'
import clsx from 'clsx'

import {
    ReactComponent as NotFound,
} from './not_found.svg'
import useStyles from './TemperatureChart2.style'

const FailureMessage = () => {
    const classes = useStyles()

    return (
        <div className={clsx(
            classes.overlay,
            classes.noData,
        )}
        >
            <Grid
                container
                spacing={3}
            >
                <Grid
                    item
                    md={6}
                >
                    <NotFound />
                </Grid>
                <Grid
                    item
                    xs={8}
                    md={6}
                    className={classes.msg}
                >
                    <div className={classes.middle}>
                        Ouups, we&apos;re sorry -
                        it seems we don&apos;t have
                        temperature data for the selected period!
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default FailureMessage
