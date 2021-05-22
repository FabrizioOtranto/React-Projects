import React from 'react'
import WeatherDetails from './WeatherDetails'

export default {
    title: 'Weather Detail',
    component: WeatherDetails
}

const Template = (args) => <WeatherDetails {...args} />

export const WeatherDetailsExample = Template.bind({})
WeatherDetailsExample.args = {humidity: 10, wind: 9}