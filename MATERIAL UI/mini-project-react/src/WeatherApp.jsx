import SearchBox from './SearchBox';
import InfoBox1 from './InfoBox1';
import { useState } from 'react';
export default function WeatherApp(){

    let [weatherInfo,setWeatherInfo]=useState({
        city: "Delh",
        feelsLike: 19.78,
        humidity: 40,
        temp: 20.62,
        tempMAX: 21.05,
        tempMIn: 20.62,
        weather: "haze"
    });

    let updateInfo=(result)=>{
setWeatherInfo(result);
    }
    return(
<div style={{textAlign:"center"}}>
<h1> Weather App by detla</h1>

<SearchBox updateInfo={updateInfo}/>
<InfoBox1 info={weatherInfo}/>
</div>

    )
}