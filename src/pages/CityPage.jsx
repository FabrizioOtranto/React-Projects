import React, { useMemo } from 'react'
import 'moment/locale/es'
import  LinearProgress  from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
import Forecast from '../components/Forecast'
import Weather from '../components/weather'
import WeatherDetails from '../components/WeatherDetails/WeatherDetails'
import ForecastChart from '../components/ForecastChart'
import CityInfo from '../components/Cityinfo'
import AppFrame from '../components/AppFrame'
import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../utils/servicesCities'
import { useWeatherDispatchContext, useWeatherStateContext } from '../WeatherContext'

const CityPage = () => {

        const actions = useWeatherDispatchContext()
        const data = useWeatherStateContext()

        const { allWeather, allChartData, allForecastItemList } = data
        const { city, countryCode } = useCityPage(allChartData, allForecastItemList, actions )
    
        const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])
    
        useCityList(cities, allWeather, actions)
        
        const cityCode = getCityCode(city, countryCode)
    
        const weather = allWeather[cityCode]
        const chartData = allChartData[cityCode]
        const forecastItemList = allForecastItemList[cityCode]
    
        const country = countryCode && getCountryNameByCountryCode(countryCode)
        const humidity = weather && weather.humidity
        const wind = weather && weather.wind
    
        const state = weather && weather.state
        const temperature = weather && weather.temperature
    
        return (
            <AppFrame>
                <Grid container
                    justify="space-around"
                    direction="column"
                    spacing={2}>
                    <Grid item container 
                        xs={12} 
                        justify="center"
                        alignItems="flex-end">
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid container item xs={12}
                        justify="center"
                        spacing = {1}>
                        <Weather state={state} temperature={temperature} />
                        {
                            humidity && wind && 
                            <WeatherDetails 
                                humidity={humidity} 
                                wind={wind} />
                        }
                    </Grid>
                    <Grid item>
                        {
                            !chartData && !forecastItemList && <LinearProgress />
                        }
                    </Grid>
                    <Grid item>
                        {
                            chartData && <ForecastChart data={chartData} />
                        }
                    </Grid>
                    <Grid item>
                        {
                            forecastItemList && <Forecast forecastItemList={forecastItemList} />
                        }
                    </Grid>
                </Grid>        
            </AppFrame>
        )
    }
    
    export default CityPage
