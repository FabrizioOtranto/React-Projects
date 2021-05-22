import React from 'react'
import CityList from './CityList'
import { render, fireEvent } from '@testing-library/react'

const cities= [
    {city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR'},
    {city: 'Bogota', country: 'Colombia',countryCode: 'CO'},
    {city: 'Madrid', country: 'espana', countryCode: 'ES'},
    {city: 'Santiago', country: 'Chile', countryCode: 'CL'},
]

test('CityList renders', async () => {
    const{findAllByRole} = render(<CityList cities = {cities} onClickCity={() => {}} data = {{}} action = {}/>)
    const items = await findAllByRole('button')

    expect(items).toHaveLength(4)
     

})

test('CitiList click on item', async () => {

    const fnClickOnItem = jest.fn()

    const{findAllByRole} = render(<CityList cities = {cities} onClickCity = {fnClickOnItem} data = {} action = {}/>)

    const items = await findAllByRole('button')

    fireEvent.click(items[0])
    
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})

