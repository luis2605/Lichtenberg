import React, { useState,useEffect } from "react";
import classes from "./intro.module.css";
import { Route, Routes, Link } from "react-router-dom";
import Typed from "react-typed";



const stringEn = [
  "wunderschön &#128540;",
  " wunderbar &#128515;",
  "sehr schön &#128526;",
  "magisch &#129327; ",
  "unvergesslich  &#128536;",
  "",
  "",
];


const Intro = () => {

  return (
    <div className={classes["intro-container"]}>
      <div className={classes["left"]}>
        
      <h1 className={classes["intro-title"]}>Lichtenberg</h1>

<h3 className={`${classes["intro-sub"]} ${classes.i0}`}>EINFACH</h3>
<Typed
  className={classes["intro-typed"]}
  strings={stringEn}
  typeSpeed={60}
  backSpeed={50}
  loop
/>

<h3 className={`${classes["intro-sub"]} ${classes.i1}`}>hier ...</h3>
<p className={classes["intro-text"]}>
  Lichtenberg ist ein Ortsteil von Morsbach und liegt in waldreicher
  Umgebung südlichsten vom Oberbergischen Kreis. Der Verein Lichtenberg
  sorgt mit seinem Einsatz für das Wohlbefinden der Bewohner. Es lohnt
  sich vorbei zuschauen, wir haben einiges zu endecken.{" "}
</p>
<p className={classes["uns-btn"]}>
  {" "}
  <Link to="/über"> Über uns </Link>
</p>
      </div>
      <div className={classes["right"]}>
        <h2 className={classes["right-title"]}>
        Willkommen auf der <span className={classes["text-cl"]}>offiziellen Website der </span>
        </h2>
       
        <p className={classes["right-text"]}><span className={classes["text-cl"]}>Dorfgemeinschaft Lichtenberg </span> im malerischen Morsbach, Nordrhein-Westfalen! Unsere Gemeinschaft besteht aus einer engagierten Gruppe von Einwohnern, die sich dafür einsetzen, das Leben in Lichtenberg <span className={classes["text-cl"]}>zu verbessern</span> und <span className={classes["text-cl"]}>zu stärken</span>.</p>
       
      </div>
      
    </div>
  );
};

export default Intro;
