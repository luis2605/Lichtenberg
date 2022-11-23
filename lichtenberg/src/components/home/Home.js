import React from "react";
import ImgSlider from "../carousel/ImgSlider";
import Intro from "../intro/Intro";
import ZuUns from "../zuUns/ZuUns";
import classes from "./home.module.css";

export const Home = () => {
  return (
    <div className={classes["home-container"]}>
      <ImgSlider />
      <Intro />
      <ZuUns />
    </div>
  );
};
