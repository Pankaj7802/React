import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox1({ info }) {
    let url = "https://tse1.mm.bing.net/th?id=OIP.GsELlefeGpMmd2OagS9gxQHaEK&pid=Api&P=0&h=180";
    const Cold_URL = "https://tse4.mm.bing.net/th?id=OIP.9F5zncRJQDLn_7GN0qXGZAHaE7&pid=Api&P=0&h=180";
    const HOT_URL = "https://tse1.mm.bing.net/th?id=OIP._6UW1704oYjKYfVcf84iMgHaEc&pid=Api&P=0&h=180";
    const Rain_URL = "https://tse4.mm.bing.net/th?id=OIP.qHX53PFlnGIRToxWsUCbgQHaFj&pid=Api&P=0&h=180";
    // let info = {
    //     city: "Delhi",
    //     feelsLike: 19.78,
    //     humidity: 40,
    //     temp: 20.62,
    //     tempMAX: 21.05,
    //     tempMIn: 20.62,
    //     weather: "haze"

    // };

    return (
        <div className="InfoBox">
            {/* <h1>Weather info -{info.weather} </h1> */}
            <br /><br />
            <div className="mainBox">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={(info.humidity > 80) ? Rain_URL :( info.temp > 15) ? HOT_URL : Cold_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {(info.humidity > 80) ? <ThunderstormIcon/> :( info.temp > 15) ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Tempreature :{info.temp}&deg;c</p>
                            <p>Humidity :{info.humidity}</p>
                            <p>MIn Temperature : {info.tempMIn}&deg;C</p>
                            <p>Max Temperature :{info.tempMAX}&deg;C</p>
                            <p>The weather can be describe as {info.weather} and feels like: {info.feelsLike}&deg;C</p>


                        </Typography>
                    </CardContent>

                </Card>
            </div>

        </div>
    );
}