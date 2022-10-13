import React, { useState, useEffect } from "react";
import classes from "./weatherWidget.module.css";

const WeatherWidget = ({ onWeatherData, onIsLoading, onError }) => {
  return (
    <div className={classes["weather_container"]}>
      <h1 className={classes["weather-title"]}>
        Das Wetter heute in Lichtenberg :
      </h1>
      {/* loading spinner  */}
      {onIsLoading && (
        <div className={classes["spinner"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      <div className={classes["weather-elements"]}>
        <span class="material-symbols-outlined">thermostat</span>{" "}
        <p>{onWeatherData.main.temp}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
