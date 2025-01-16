import { useState } from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'

export default function MainComponent(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Kanpur",
        feelsLike: 9.05,
        humidity: 100,
        maxTemp: 9.05,
        minTemp: 9.05,
        temp: 9.05,
        weather: "fog"      
    }
)
let updateWeather = (result)=>{
    setWeatherInfo(result);
}
    return(
        <>
        <SearchBox updateInfo = {updateWeather}/>
        <InfoBox info = {weatherInfo}/>
        </>
    )
}