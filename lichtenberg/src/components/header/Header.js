import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import classes from "./header.module.css";
import WeatherWidget from "./auxComp/WeatherWidget";
import * as WiIcons from "react-icons/wi";
import { BiCaretUp } from "react-icons/bi";
import sidebarData from "../../data/sideBarData";


const Header = () => {
  const [weatherShown, setWeatherShown] = useState(false);
  const [weatherData, setWeatherData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errorHapp, setErrorHap] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [sidebarLinks, setSidebarLinks] = useState(sidebarData);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

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
  /* show scroll btn to go up */

  useEffect(() => {
    const handleScroll = (event) => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 50) {
        setIsScrolledDown((prevScrolled) => true);
        console.log(isScrolledDown);
      } else setIsScrolledDown((prevScrolled) => false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolledDown]);

  console.log(weatherData);

  const showWeather = () => {
    setWeatherShown((prev) => {
      return !prev;
    });
  };
  /* open the hamburguer menu  */
  const openCloseMenu = () => {
    setMenuOpen((prev) => {
      return !prev;
    });
  };
   // scroll to the beginning of the page

   const scrollUp =()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  /* map the sidebarLinks */
  console.log(sidebarLinks);
  const sideBar = sidebarLinks.map((bar, index) => {
    return (
      <li className={classes["sidebar-elements"]} key={index}>
        <span className={classes["sidebar-icon"]}>{bar.icon}</span>
        <Link onClick={scrollUp} to={bar.ref}>{bar.name} </Link>
      </li>
    );
  });

 
  return (
    <>
      <header className={isScrolledDown ? "" : classes["transparent"]}>
      
        <img className={classes["header_logo"]} src={logo} alt="logo"></img>
        <nav >
          <ul className={classes["header_nav-list"]}>
            <li > 
              <div className={classes["glitch-wrapper"]}>
                <div
                  className={`${classes["glitch"]} ${classes.g0}`}
                  data-glitch="Startseite"
                >
                  <Link onClick={scrollUp} to="/"> Startseite </Link>
                </div>
              </div>
            </li>
            <li>
              <div className={classes["glitch-wrapper"]}>
                <div
                  className={`${classes["glitch"]} ${classes.g1}`}
                  data-glitch="glitch"
                >
                  <Link onClick={scrollUp} to="/über"> Über uns </Link>
                </div>
              </div>
            </li>
            <li>
              <div className={classes["glitch-wrapper"]}>
                <div
                  className={`${classes["glitch"]} ${classes.g2}`}
                  data-glitch="Spenden "
                >
                  <Link onClick={scrollUp} to="/spenden"> Spenden </Link>
                </div>
              </div>
            </li>

            <li>
              <div className={classes["glitch-wrapper"]}>
                <div
                  className={`${classes["glitch"]} ${classes.g3}`}
                  data-glitch="Über uns"
                >
                  <Link onClick={scrollUp} to="/aktuelles"> Aktuelles </Link>
                </div>
              </div>
            </li>
            <li>
              <div className={classes["glitch-wrapper"]}>
                <div
                  className={`${classes["glitch"]} ${classes.g4}`}
                  data-glitch="Über uns"
                >
                  <Link onClick={scrollUp} to="/kontakt"> Kontakt </Link>
                </div>
              </div>
            </li>
          </ul>
          <span
            onClick={showWeather}
            className={
              isScrolledDown
                ? classes["weather-btn"]
                : `${classes["weather-btn"]} ${classes["weather-btn__scrolled"]}`
            }
          >
            <WiIcons.WiDaySunnyOvercast />
          </span>
        </nav>
        {weatherShown && (
          <WeatherWidget
            onWeatherData={weatherData}
            onIsLoading={isLoading}
            onError={error}
            onErrorHap={errorHapp}
          />
        )}
        <div onClick={openCloseMenu} className={classes["hamburger-lines"]}>
          <span
            className={
              menuOpen
                ? `${classes.line} ${classes.line1trans}`
                : `${classes.line} ${classes.line1}`
            }
          ></span>
          <span
            className={
              menuOpen
                ? `${classes.line} ${classes.line2trans}`
                : `${classes.line} ${classes.line2}`
            }
          ></span>
          <span
            className={
              menuOpen
                ? `${classes.line} ${classes.line3trans}`
                : `${classes.line} ${classes.line3}`
            }
          ></span>
        </div>
        {menuOpen && (
          <div className={classes["sidebar-container"]}>
            <nav>
              <ul onClick={openCloseMenu}  className={classes["sidebar-list"]}>{sideBar}</ul>
            </nav>
          </div>
        )}
      </header>
      {isScrolledDown && (
        <div className={menuOpen ? classes["none"] : classes["arrow-goUp"]}>
         <div onClick={scrollUp}>  <BiCaretUp /> </div>
           
         
        </div>
      )}
    </>
  );
};

export default Header;
