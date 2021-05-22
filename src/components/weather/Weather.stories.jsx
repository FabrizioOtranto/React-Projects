import React from 'react'
import 'typeface-roboto'
import Weather from './Weather'

export default {
    title: 'Weather',
    Component: Weather
}

const Template = (args) => <Weather {...args} />

export const Weathercloud = Template.bind({})
Weathercloud.args = {temperature: 10, state: 'clouds'}

export const WeatherSunny = Template.bind({})
WeatherSunny.args = {temperature: 20, state: 'clear'}

