import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

test('forecast render', async () => {
    
    const forecastItemList = [
        { hour: 18, state: 'clear', temperature:20, weekDay:'Lunes'},
        { hour: 6, state: 'drizzle', temperature:9, weekDay:'Martes'},
        { hour: 12, state: 'rain', temperature:3, weekDay:'Miercoles'},
        { hour: 14, state: 'thunderstorm', temperature:10, weekDay:'Jueves'},
        { hour: 13, state: 'clouds', temperature:14, weekDay:'Vierens'},
        { hour: 9, state: 'snow', temperature:15, weekDay:'Sabado'},
    ]

    const  {findAllByTestId } = render(<Forecast forecastItemList = {forecastItemList} />)

    const  forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(6)
})