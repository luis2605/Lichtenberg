import React from 'react'
import classes from './collage.module.css'
import collage from '../../assets/img/Alles Gute.webp'

const Collage = () => {
  return (
    <div className={classes["collage-container"]}>
      <img className={classes["collage-img"]} src={collage} alt="collage"></img>
      
    </div>
  )
}

export default Collage