import React from 'react'
import geschichte from "../../assets/img/timeline.webp"

import classes from "./geschichte.module.css"

const Geschichte = () => {
  return (
    <div className={classes["geschichte-container"]}>

        <h2 className={classes["geschichte-title"]}>und weil wir wissen, woher wir kommen und wohin wir gehen ... </h2>
    <img className={classes["geschichte-img"]} src={geschichte} alt="grüne oase"></img>
    
  </div>
  )
}

export default Geschichte