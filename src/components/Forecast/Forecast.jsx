import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Forecastitems from '../ForecastItems/Forecastitems'
import { validValues } from '../iconState/index'

const renderForecastItem = forecast =>{
    const {hour, temperature, state, weekDay} = forecast

    return (

        <Grid 
        data-testid="forecast-item-container"
        item key = {`${weekDay}${hour}`}> 
        <Forecastitems 
        hour = {`${hour}hs`}
        weekDay = {weekDay}
        state = {state}
        temperature = {temperature}>       
        </Forecastitems>
        </Grid>
        )
    }

const Forecast = ({forecastItemList}) => {
    return (
        <Grid container
        justify='space-around'
        alignItems = 'center'>
            {
                forecastItemList.map(forecast => renderForecastItem(forecast))
            }
        </Grid>
    )}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired
    })
    ).isRequired
}

export default Forecast
