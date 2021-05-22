import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import IconState, { validValues } from '../iconState/index'


const Forecastitems = ({weekDay, hour, state, temperature}) => {
    const iconContextSize = useMemo(() => ({ size: '5em'}), [])
    return (
        <Grid container
            direction ="column"
            justify = "center"
            alignItems= "center"
            >
            <Grid item>
                <Typography >{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography  >{hour}</Typography>
            </Grid>
            <Grid item>
            <IconContext.Provider  value = {iconContextSize}>
                    <IconState state = {state} />
                </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography >{temperature}º</Typography>
            </Grid>            
            </Grid>

    )
}

Forecastitems.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired

}

export default Forecastitems
