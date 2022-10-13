import React, { useState, useEffect } from "react";
import classes from "./weatherWidget.module.css";

const WeatherWidget = ({ onWeatherData, onIsLoading, onError, onErrorHap }) => {
  return (
    <div className={classes["weather_container"]}>
      <h1 className={classes["weather-title"]}>
        Das Wetter heute in{" "}
        <span className={classes["contrast-color"]}>Lichtenberg</span> :
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
      {onErrorHap && (
        <div className={classes["weather-error"]}>
          <span class="material-symbols-outlined">error</span>
          <p>{onError}</p>
        </div>
      )}
      {!onErrorHap && (
        <>
          <div className={classes["weather-elements"]}>
            <span className={classes["contrast-color"]}>
              <span class="material-symbols-outlined">thermostat</span>
            </span>{" "}
            <p>{onWeatherData.main.temp} &#8451;</p>
          </div>
          <div className={classes["weather-elements"]}>
            <span className={classes["contrast-color"]}>
              <span class="material-symbols-outlined">humidity_low</span>
            </span>
            <p>{onWeatherData.main.humidity} %</p>
          </div>
          <div className={classes["weather-elements"]}>
            <span className={classes["contrast-color"]}>
              <span class="material-symbols-outlined">cloudy</span>
            </span>
            <p>{onWeatherData.clouds.all} %</p>
          </div>
          <div className={classes["weather-elements"]}>
            <span className={classes["contrast-color"]}>
              <span class="material-symbols-outlined">storm</span>
            </span>
            <p>{onWeatherData.main.pressure} hPa</p>
          </div>
          <div className={classes["weather-elements"]}>
            <span className={classes["contrast-color"]}>
              <span class="material-symbols-outlined">air</span>
            </span>
            <p>{onWeatherData.wind.speed} m/s</p>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherWidget;
