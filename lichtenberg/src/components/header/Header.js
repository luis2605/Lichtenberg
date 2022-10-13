import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import logo from "../../assets/img/Logo-Lichtenberg.png";
import classes from "./header.module.css";
import WeatherWidget from "./auxComp/WeatherWidget";

const Header = () => {
  const [weatherShown, setWeatherShown] = useState(false);
  const [weatherData, setWeatherData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorHapp, setErrorHap] = useState(false);

  /*fetch weather data and load the response before the weather widget mounted */
  useEffect(() => {
    async function fetchWeatherData() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          // "https://api.weatherbit.io/v2.0/current?lat=50.8999&lon=7.7050&key=54e1e0f6cfda4f1a9a1f62bdb1c1c482&include=minutely&lang=de"
          "https://api.openweathermap.org/data/2.5/weather?lat=50.8999&lon=7.7050&appid=cfd8bbd90717c730eebe3ed61c0322dd&units=metric&lang=de"
        );
        if (!response) {
          throw new error("");
        }
        const data = await response.json();
        console.log(data);

        setWeatherData(data);
        setIsLoading(false);
      } catch (error) {
        setError("Something went wrong");
        setErrorHap(true);
      }

      console.log(error);
      setErrorHap(false);
    }
    fetchWeatherData();
  }, []);
  console.log(weatherData);
  const showWeather = () => {
    setWeatherShown((prev) => {
      return !prev;
    });
  };
  return (
    <header>
      <img className={classes["header_logo"]} src={logo} alt="logo"></img>
      <nav>
        <ul className={classes["header_nav-list"]}>
          <li>
            <Link to="/"> Startseite </Link>
          </li>
          <li>
            <Link to="/über"> Über uns </Link>
          </li>
          <li>
            <Link to="/spenden"> Spenden </Link>
          </li>
          <li>
            <Link to="/aktuelles"> Aktuelles </Link>
          </li>
          <li>
            <Link to="/kontakt"> Kontakt </Link>
          </li>
          <li>
            <span onClick={showWeather} class="material-symbols-outlined">
              nest_farsight_weather
            </span>
          </li>
        </ul>
      </nav>

      {weatherShown && (
        <WeatherWidget
          onWeatherData={weatherData}
          onIsLoading={isLoading}
          onError={error}
          onErrorHap={errorHapp}
        />
      )}
    </header>
  );
};

export default Header;
