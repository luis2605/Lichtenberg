import React from "react";
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
  );
};

export default Intro;
