import React ,{useEffect} from 'react'
import classes from './mitglied.module.css'
import einladung from '../../assets/img/einladung.webp'
import { Route, Routes, Link } from "react-router-dom";

const Mitglied = () => {
   // scroll to the beginning of the page

   const scrollUp =()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    scrollUp();
  }, []);
  return (
    <div className={classes["mitglied-container"]}>
        <h2 className={classes["mitglied-title"]}>Mitglied werden</h2>

        <img className={classes["mitglied-img"]} src={einladung} alt="einladung"/>
        <div className={classes["mitglied-buttons"]}>
        
     
        <a className={classes["mitglied-btn"]} href={process.env.PUBLIC_URL + '/public/DGTNVorlageMitgliedsantrag.pdf'} download="DGTNVorlageMitgliedsantrag.pdf"> 📄 Download the pdf</a>


        <p className={classes["mitglied-btn"]}>
  {" "}
  <Link onClick={scrollUp} to="/über"> ◻️ Zurück </Link>
</p>

        </div>
    </div>
  )
}

export default Mitglied