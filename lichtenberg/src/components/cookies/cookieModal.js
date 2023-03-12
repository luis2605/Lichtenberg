import React from 'react';
import classes from '../cookies/cookieModal.module.css'
import cookie from '../../assets/img/cookie.jpg'

function CookieModal(props) {
  const { show, handleClose } = props;

  const modalStyles = {
  
  };

  return (
    <div className={classes.modalStyles}>
        <div className={classes["modalStyles-title"]}>
        <p className={classes["modalStyles-text"]}>Diese Website verwendet <span className={classes["text-bl"]}>  Cookies</span>, um Ihr Nutzererlebnis zu verbessern.</p>
        <img className={classes["modalStyles-img"]}src={cookie} alt={"cookie pic"}></img>
        </div>
        <div className={classes["modalStyles-options"]}>
        <label className={classes["form-control"]}>
        <input type="radio" name="radio" defaultChecked />
        Notwendig 
        <p>Mit dieser Einstellung wird zur korrekten Darstellung der Website Google Fonts geladen.</p>
        </label>
        <label className={classes["form-control"]}>
        <input type="radio" name="radio"  />
        Analyse
        <p>Mit dieser Einstellung werden Google Fonts, Cookies für erweiterte Funktionen, sowie Google Analytics geladen und zugelassen.</p>
        </label>

        </div>
     
      <button className={classes["form-btn"]} onClick={handleClose}>Speichern & Fortfahren</button>

      <div className={classes["modalStyles-links"]}>
        
      </div>
    </div>
  );
}

export default CookieModal;
