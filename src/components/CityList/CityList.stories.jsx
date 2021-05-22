import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: 'CityList',
    component: CityList
}
const cities= [
    {city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR'},
    {city: 'Bogota', country: 'Colombia',countryCode: 'CO'},
    {city: 'Madrid', country: 'espana', countryCode: 'ES'},
    {city: 'Santiago', country: 'Chile', countryCode: 'CL'},
]
export const CityListExample = () => <CityList cities = {cities} onClickCity = {action('Click en City')} />