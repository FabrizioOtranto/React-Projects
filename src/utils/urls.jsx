
const appid = 'token'

export const getWeatherUrl = ({city, countryCode}) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;

export const getForecastrUrl = ({city, countryCode}) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`;
