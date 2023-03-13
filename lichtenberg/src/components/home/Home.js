import React from "react";
import ImgSlider from "../carousel/ImgSlider";

import Intro from "../intro/Intro";
import ZuUns from "../zuUns/ZuUns";
import classes from "./home.module.css";
import Wieso from "../wieso/Wieso";
import Collage from "../collage/Collage";

import Projekte from "../projekte/Projekte";
import Geschichte from "../geschichte/Geschichte";

export const Home = () => {
  return (
    <div className={classes["home-container"]}>
    
      <ImgSlider />
      <Intro />
      <Wieso></Wieso>
      <ZuUns />
      <Collage/>
      <Projekte/>
      <Geschichte/>
    </div>
  );
};
