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
        <p className={classes["modalStyles-text"]}>Diese Website benutzt<span className={classes["text-bl"]}>  Cookies</span>. Wenn Du die Website weiter nutzt, gehen wir von deinem Einverständnis aus.</p>
        <img className={classes["modalStyles-img"]}src={cookie} alt={"cookie pic"}></img>
        </div>
        
     
      <button className={classes["form-btn"]} onClick={handleClose}>Ok</button>

      <div className={classes["modalStyles-links"]}>
        
      </div>
    </div>
  );
}

export default CookieModal;
