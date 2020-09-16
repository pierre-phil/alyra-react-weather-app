import React, { useEffect, useState } from "react";
import Description from "./Description";
import Humidity from "./Humidity";
import Icon from "./Icon";
import Temperature from "./Temperature";

const Weather = ({ city }) => {
  const API_KEY = "4e7b5964d47fcbbd22dfcda7769183cc";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&&lang=fr`;

  const [conditions, setConditions] = useState({});
  const [description, setDescription] = useState("");
  const [iconId, setIconId] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("météo introuvable");
      })
      .then((result) => {
        console.log(result);
        setDescription(result.weather[0].description);
        setIconId(result.weather[0].icon);
        setLocation([result.name, result.sys.country]);
        setConditions({
          feelsLike: Math.round(result.main.feels_like),
          mainTemp: Math.round(result.main.temp),
          humidity: result.main.humidity,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }, [city]);

  return (
    !!location && (
      <section className="text-center mb-5">
        <Icon iconId={iconId} />
        <h2 className="mb-4">Conditions météo à {location}</h2>
        <Description description={description} />
        <Temperature
          mainTemp={conditions.mainTemp}
          feelsLike={conditions.feelsLike}
        />
        <Humidity humidity={conditions.humidity} />
      </section>
    )
  );
};

export default Weather;
