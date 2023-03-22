import React, { useState, useEffect } from "react";
import classes from "./weatherWidget.module.css";
import * as WiIcons from "react-icons/wi";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
const WeatherWidget = ({ onWeatherData, onIsLoading, onError, onErrorHap, onHeaderSmall }) => {
  console.log(onHeaderSmall)

 
  
 
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      console.log(windowDimensions)
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [windowDimensions]);
  

  

  return (
    <div className={onHeaderSmall && windowDimensions.width<720 ? classes["weather-container-small"] : classes["weather_container"]}>
      <h1 className={classes["weather-title"]}>
        Das Wetter in{" "}
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
        <div className={classes["weather-container"]}>
          <div className={classes["weather-elements"]}>
            <span className={classes["contrast-color"]}>
              <WiIcons.WiThermometer />
            </span>{" "}
            <p>{onWeatherData.main.temp} &#8451;</p>
          </div>
          <div className={classes["weather-elements"]}>
            <span className={classes["contrast-color"]}>
              <WiIcons.WiHumidity />
            </span>
            <p>{onWeatherData.main.humidity} %</p>
          </div>
          <div className={classes["weather-elements"]}>
            <span className={classes["contrast-color"]}>
              <WiIcons.WiCloudy />
            </span>
            <p>{onWeatherData.clouds.all} %</p>
          </div>
          <div className={classes["weather-elements"]}>
            <span className={classes["contrast-color"]}>
              <WiIcons.WiBarometer />
            </span>
            <p>{onWeatherData.main.pressure} hPa</p>
          </div>
          <div className={classes["weather-elements"]}>
            <span className={classes["contrast-color"]}>
              <WiIcons.WiStrongWind />
            </span>
            <p>{onWeatherData.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
