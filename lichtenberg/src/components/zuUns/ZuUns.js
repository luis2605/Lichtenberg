import React ,{useState} from "react";
import classes from "./zuUns.module.css";
import standOrt from "../../assets/img/StandortNew.png";
import Map from "../openmaps/Map";
import zumMap from "../../assets/img/zumMap.gif";
import MapModal from "../modalMap/MapModal";
const ZuUns = () => {
  const [showMap , setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  return (
   <>
    <h2 className={classes["zuUns-intro"]}>Dein Weg zu uns findest du hier:  </h2>
    
   <div onClick={handleShowMap} className={classes["zuUns-container"]}>
 
   {showMap && <MapModal/>}
  
   {!showMap && <div  className={classes["zuUns-container-right"]}>
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
   </div>}
  
   
   
   </div>
   </>
   
  );
};

export default ZuUns;
