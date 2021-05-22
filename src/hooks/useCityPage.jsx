import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getForecastrUrl } from '../utils/urls'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'
import { getCityCode } from '../utils/utils'


const useCityPage = (allChartData, allForecastItemList, actions ) => {

    const [error, setError] = useState(null)

    const {city, countryCode} = useParams()

    useEffect(() => {
        const getForecast = async () =>{
           const url = getForecastrUrl({city,countryCode})
           const cityCode = getCityCode(city, countryCode)
                
            try{
                const { data } = await axios.get(url)

                const dataAux = getChartData(data)
                actions({type: 'SET_CHART_DATA', payload: { [cityCode]: dataAux }})

                const forecastItemListAux = getForecastItemList(data)
                actions({type: 'SET_FORECAST_ITEM_LIST', payload: { [cityCode]: forecastItemListAux }})

            }catch (error){
                if(error.response){
                    setError('Ha ocurrido un error en el servidor del clima')
                }else if(error.response){
                    setError('Verifique la conexion a internet')
                }else { 
                    setError('Error al cargar los datos')
                }
            }

            }
            const cityCode = getCityCode(city, countryCode)

            if (allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode]) {
                getForecast()
            }
        }, [city, countryCode, actions, allChartData, allForecastItemList])

        return {city, countryCode, error, setError }

}

export default useCityPage