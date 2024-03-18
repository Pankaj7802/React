import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [city,setCity]=useState("");
    let [error,setError]=useState(false)//pahle " "
 const Api_url="https://api.openweathermap.org/data/2.5/weather";
 const api_key="f98bf2ed6e3913198e266f38b0790578";
 
 
 let getWeatherInfo = async () =>{
    try{
        let response= await fetch(`${Api_url}?q=${city}&appid=${api_key}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
          city:city,
          temp:jsonResponse.main.temp,
          tempMIn:jsonResponse.main.temp_min,
          tempMAX:jsonResponse.main.temp_max,
          humidity:jsonResponse.main.humidity,
          feelsLike:jsonResponse.main.feels_like,
          weather:jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    }catch (err){
throw err;
    }
 
 };
 

   
    let handelChange=(event)=>{
        setCity(event.target.value);

    }
    let handelSumit= async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
         let newInfo=await  getWeatherInfo();
         updateInfo(newInfo);
        }catch(err){
            // setError("No Such place in API");
            setError(true);
        }
        
    }
    return (
        <div className='SearchBox'>
            {/* <h1>Search for the  weather </h1> */}

            <form onSubmit={handelSumit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handelChange} />
            <br /><br />
                <Button variant="contained" size='large' type='sumit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No Such place in API exists!</p>}

            </form>


        </div>
        );
}