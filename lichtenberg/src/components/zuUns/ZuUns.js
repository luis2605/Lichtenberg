import React from "react";
import classes from "./zuUns.module.css";
import standOrt from "../../assets/img/StandortNew.png";

const ZuUns = () => {
  return (
    <div className={classes["zuUns-container"]}>
      <img className={classes["zuUns-img"]} src={standOrt} alt="map" />
      <div className={classes["zuUns-info"]}>
        <h2 className={classes["zuUns-title"]}>Ihr Weg zu uns</h2>
        <h3 className={classes["zuUns-sub"]}>Lichtenberg, 51597 Morsbach</h3>
        <p className={classes["zuUns-text"]}>
          Die nächsten Städte sind{" "}
          <span className={classes.highlighted}>Gummersbach</span> (28 km),
          <span className={classes.highlighted}>Siegen</span> (35 km) sowie{" "}
          <span className={classes.highlighted}>Köln</span> (70 km).
        </p>
      </div>
    </div>
  );
};

export default ZuUns;
