import React from 'react'
import projekte from "../../assets/img/Projekte.webp"
import classes from  "./projekte.module.css"

const Projekte = () => {
  return (
    <div className={classes["projekte-container"]}>

        <h2 className={classes["projekte-title"]}>Weil wir unser Dorf jeden Tag ein bisschen schöner machen ... </h2>
   
    <a className={classes["projekte-link"]} href="https://www.oberberg-aktuell.de/lokalmix/gruene-oase-soll-zum-ende-des-jahres-fertig-sein-a-80020?fbclid=IwAR1hV2N2dXdWVTrif2Uj3GmACUHExgPrHzH5pzrOXe1P3iwggYB4Sd3PgbQ" target="
    " > <img className={classes["projekte-img"]} src={projekte} alt="grüne oase"></img></a>
  </div>
  )
}

export default Projekte