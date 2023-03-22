import React from 'react'
import classes from './uberUns.module.css'
import lichtenbergOther from '../../assets/img/Lichtenbergother.png'
import infografik from '../../assets/img/infografik.png'
import vorstandBig from '../../assets/img/vorstand-big.gif'
import { Route, Routes, Link } from "react-router-dom";
import Vorstand from '../vorstand/Vorstand'
const uberUns = () => {
   // scroll to the beginning of the page

   const scrollUp =()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: "smooth",
    });
  }
  return (
    <div className={classes["uber-uns-container"]}>
<div className={classes["uber-uns-intro_image"]}>

<img className={classes["logo-image"]} src={lichtenbergOther} alt="other logo"/>
</div>
      <div className={classes["uber-uns-intro"]}>
      <img src={lichtenbergOther} alt="other logo"/>
      <div className={classes["uber-uns-intro_text"]}>
<h2 className={classes["uber-uns-intro_title"]}>Die Dorfgemeinschaft Lichtenberg e.V.</h2>
<h3 className={classes["uber-uns-intro_title"]}>Ein Ortsteil von Morsbach...</h3>

</div>
<div className={classes["uber-uns-intro_title-2"]}>
<p className={classes["uber-uns-intro_title2-text"]}>Die Dorfgemeinschaft Lichtenberg e.V. ist der mitgliederstärkste Verein in Lichtenberg. Zu unseren Aufgaben gehört unter anderem der Bereich der Dorfgestaltung und die Vertretung des Ortes gegenüber der Gemeindeverwaltung.

</p>
<p className={classes["uber-uns-intro_title2-text"]}>So bauten wir mit Hilfe der Gemeinde für unsere Jüngsten in zentraler Lage einen Kinderspielplatz. Unsere immer sprudelnde Quelle "das Rinnchen", um die sich Lichtenberg seit dem Jahre 1386 entwickelt hat und die früher als Viehtränke und zur Milchkühlung benutzt wurde, ist heute als ein Ort der Ruhe und der Erholung umgestaltet.</p>
<p className={classes["uber-uns-intro_title2-text"]}>Wir freuen über jede tatkräftige Unterstützung und nehmen gerne Vorschläge oder Hinweise entgegen.</p>
</div>

<img className={classes["infografik"]} src={infografik} alt="infografik"/>

<div className={classes["vereine"]}>
  <h2 className={classes["vereine-title"]}>Unsere Vereine:  </h2>
  <ul className={classes["vereine-list"]}>
    <li className={classes["vereine-li"]}>Die Dorfgemeinschaft Lichtenberg e.V.</li>
    <li className={classes["vereine-li"]}> <a href='https://mgv-hoffnung.jimdo.com/'>Der Männergesangverein MGV Hoffnung</a></li>
    <li className={classes["vereine-li"]}> <a href='https://www.katholisch-mfw.de/erleben-mitmachen/frauen/kath.-frauengemeinschaft-lichtenberg-kfd/#:~:text=Die%20Zugeh%C3%B6rigkeit%20zum%20gr%C3%B6%C3%9Ften%20Frauenverband,sie%20mit%20unseren%20spirituellen%20F%C3%A4higkeiten.'>Die katholische Frauengemeinschaft kfd</a></li>
    <li className={classes["vereine-li"]}>Die Jugendgruppe KLJB</li>
    <li className={classes["vereine-li"]}> <a href='https://www.facebook.com/ErntedankfestLichtenberg/?locale=de_DE'>Der Erntedankfest-Festausschuss</a></li>
    <li className={classes["vereine-li"]}> <a href='http://www.musikverein-lichtenberg.de/'>Der Musikverein</a></li>
    <li className={classes["vereine-li"]}>Die Säuköppe</li>
    <li className={classes["vereine-li"]}> <a href='https://www.ftc-lichtenberg.de/'>Der Tennisverein FTC</a></li>
    <li className={classes["vereine-li"]}>Der Förderverein des Kindergartens</li>
    <li className={classes["vereine-li"]}>Der Förderverein der Grundschule</li>
    <li className={classes["vereine-li"]}> <a href='http://www.nebelkraehen.de//'>Die Pfadfinder Nebelkrähen</a></li>
    <li className={classes["vereine-li"]}>Die Wilde 13</li>

 
  </ul>
</div>


      </div>

      <Vorstand/>
    

      <div className={classes["mitglied"]}>
  <h2 className={classes["mitglied-title"]}>Mitglied werden:  </h2>
 
  <p className={classes["mitglied-text"]}>Wir wollen Dich herzlich dazu einladen, Teil unserer Dorfgemeinschaft in Lichtenberg zu werden!</p>

  <p className={`${classes["mitglied-btn"]} ${classes["pulsate-bck"]}`}>
  {" "}
  <Link onClick={scrollUp} to="/mitglied"> Jetz Mitglied werden </Link>
</p>
</div> 
    </div>
  )
}

export default uberUns