import { useEffect, useState } from "react";
import weatherService from "./services/weatherService";

const ShowWeather = ({ country }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (country && country.capital && country.capital[0]) {
        const weatherInfo = await weatherService.getAll(country.capital[0]);
        setWeather(weatherInfo);
      }
    }
    fetchData();
  }, [country]); // Empty dependency array to run the effect only once

  const icon = weather?.weather?.[0]?.icon;
  const imgSource = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const KelvinToCelci = (degree) => {
    return (degree - 273.15).toFixed(2);
  };

  return (
    <div>
      <h1>Weather in {country?.capital[0]}</h1>
      <div>temperature {KelvinToCelci(weather?.main?.temp)} Celcius</div>
      <div>{icon && <img src={imgSource} />}</div>
      <div>wind {weather?.wind?.speed} m/s</div>
    </div>
  );
};
export default ShowWeather;
