import React, { useState, useEffect } from "react";
import classes from "./joke.module.css";

const Joke = () => {
  const [moveBtn, setMoveBtn] = useState(false);

  const arrAreas = [
    "p1",
    "p2",
    "p3",
    "p4",
    "p5",
    "p6",
    "p7",
    "p8",
    "p9",
    "p10",
    "p11",
    "p12",
    "p13",
    "p14",
    "p15",
    "p16",
  ];

  const [indexValue, setIndexValue] = useState(6);

  const handleMouseEnter = (event) => {
    setMoveBtn(true);
    if (indexValue < 15) {
      setIndexValue(() => {
        return indexValue + 1;
      });
    } else if (indexValue >= 15) {
      setIndexValue(() => {
        return indexValue - 15;
      });
    }

    setClassNumber(() => {
      return arrAreas[indexValue];
    });

    console.log(indexValue);
  };

  const [classNumber, setClassNumber] = useState("p6");
  //   const handleMouseLeave = (event) => {
  //     setMoveBtn(false);

  //     console.log(moveBtn);
  //   };

  return (
    <div id="container" className={classes["joke-container"]}>
      <h1>
        {" "}
        Haben Sie in den letzten Monaten daran gedacht, die erfrischende
        Bergbrise in Lichtenberg zu genießen??
      </h1>
      <div className={classes["answer-wrapper"]}>
        <h2
          onMouseEnter={handleMouseEnter}
          //   onMouseLeave={handleMouseLeave}
          className={`${classes["btn"]}   ${classes[`${classNumber}`]}`}
        >
          Nein
        </h2>
        <h2 className={`${classes["btn"]}   ${classes["p7"]}`}>Ja</h2>
      </div>
    </div>
  );
};

export default Joke;
