import React from 'react'
import Forecastitems from './Forecastitems'

export default {
    title: 'ForecastItems',
    component: Forecastitems
}

export const ForecastitemsExample = () => <Forecastitems
                                    weekDay={'Lunes'} 
                                    hour = {10} 
                                    state = {'clear'} 
                                    temperature={23}>
                                    </Forecastitems>