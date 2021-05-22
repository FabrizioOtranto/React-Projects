import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // 

test('CityInfo render', async () => {

const city = 'Buenos Aires'
const country = 'Argentina'
const{ findAllByRole } = render(<CityInfo city = {city} country ={country} />)

const cityAndCountryComponent = await findAllByRole('heading')

expect(cityAndCountryComponent[0]).toHaveTextContent(city)
expect(cityAndCountryComponent[1]).toHaveTextContent(country)
})

