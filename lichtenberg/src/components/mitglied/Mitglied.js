import React ,{useEffect} from 'react'
import classes from './mitglied.module.css'
import einladung from '../../assets/img/einladung.webp'
import { Route, Routes, Link } from "react-router-dom";

const Mitglied = () => {
   // scroll to the beginning of the page
   const handleDownload = async () => {
    try {
      const response = await fetch('/lichtenberg/src/assets/pdf/Mitgliedsantrag.pdf', {
        responseType: 'blob',
      });
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Mitgliedsantrag.pdf';
      link.click();
    } catch (error) {
      console.error('Error occurred while downloading the PDF:', error);
    }
  };
  
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
        
     
        <button className={classes["mitglied-btn"]} onClick={handleDownload}> 📄 Download the pdf</button>


        <p className={classes["mitglied-btn"]}>
  {" "}
  <Link onClick={scrollUp} to="/über"> ◻️ Zurück </Link>
</p>

        </div>
    </div>
  )
}

export default Mitglied