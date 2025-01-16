import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

export default function InfoBox({info}) {
    const cardImg = 'https://images.unsplash.com/photo-1530563885674-66db50a1af19?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    const coldUrl = 'https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const hotUrl = 'https://plus.unsplash.com/premium_photo-1720760950804-729e3043a1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const rainUrl = 'https://images.unsplash.com/photo-1525939864518-b53937989bbd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <>
      <div className="infoBox">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image = {info.humidity > 80 ? rainUrl : info.temp > 15 ? hotUrl : coldUrl}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity > 80? <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }} component="span">
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity is {info.humidity}</p>
                <p>Minimum Temperature is {info.minTemp}&deg;C</p>
                <p>Maximum Temperature is {info.maxTemp}&deg;C</p>
                <p>The weather can be described <i style={{color: "black"}}>{info.weather} </i> and feel like {info.feelsLike}&deg;C</p>
              </Typography>
            </CardContent>
            
          </Card>
        </div>
      </div>
    </>
  );
}
