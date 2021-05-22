const cities= [
    {city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR'},
    {city: 'Bogota', country: 'Colombia',countryCode: 'CO'},
    {city: 'Madrid', country: 'espana', countryCode: 'ES'},
    {city: 'Santiago', country: 'Chile', countryCode: 'CL'},
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => cities.filter(c => c.countryCode === countryCode)[0].country