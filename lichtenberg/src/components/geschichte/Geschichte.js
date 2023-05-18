import {useState ,useEffect} from 'react'
import geschichte from "../../assets/img/timeline.webp"
import geschichte2 from "../../assets/img/timeline-mobile.webp"

import classes from "./geschichte.module.css"

const Geschichte = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classes["geschichte-container"]}>

        <h2 className={classes["geschichte-title"]}>und weil wir wissen, woher wir kommen und wohin wir gehen ... </h2>
    <img className={classes["geschichte-img"]} src={windowWidth <425? geschichte2 : geschichte} alt="grüne oase"></img>
    
  </div>
  )
}

export default Geschichte