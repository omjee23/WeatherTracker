import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  let ApiUrl = "https://api.openweathermap.org/data/2.5/weather";
  let ApiKey = "e4ac8f154fde93d28a50b9829ca7433d";

  let getWeatherInfo = async () => {
    try {
      let resData = await fetch(
        `${ApiUrl}?q=${city}&appid=${ApiKey}&units=metric`
      );
      let data = await resData.json();
      console.log(data);
      let result = {
        city: city,
        temp: data.main.temp,
        minTemp: data.main.temp_min,
        maxTemp: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  function handleInputchange(event) {
    setCity(event.target.value);
  }
  async function submitInput(event) {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let getInfo = await getWeatherInfo();
      updateInfo(getInfo);
    } catch (error) {
        setError(true)
    }
  }
  return (
    <>
      <div className="searchBox">
        <h3>Weather App</h3>
        <form onSubmit={submitInput}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleInputchange}
          />
          <br /> <br />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
        {error && <p style={{color: 'red'}}>No such place Exits in API !</p>}
      </div>
    </>
  );
}
