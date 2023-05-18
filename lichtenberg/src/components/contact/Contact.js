import React from 'react'
import { useState } from 'react';
import EmailForm from '../emailForm/EmailForm.js';
import classes from './contact.module.css'
import whatsapp from "../../assets/img/whatsapp.png"

const Contact = () => {

    const [message, setMessage] = useState('');

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSendMessage() {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/491701796321?text=${encodedMessage}`;
    window.open(url, '_blank');
  }

  // change the input text when you write on it

//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

const textLength = message.length;
const minHeight = 105; /* minimum height */
const maxHeight = 200; /* maximum height */
const minFontSize = 16; /* minimum font size */
const maxFontSize = 24; /* maximum font size */

/* calculate new height and font size */
const newHeight = minHeight + (textLength * 10);
const newFontSize = minFontSize + (textLength * 0.5);

/* limit height and font size to minimum and maximum values */
const height = `${Math.min(maxHeight, Math.max(minHeight, newHeight))}px`;
const fontSize = `${Math.min(maxFontSize, Math.max(minFontSize, newFontSize))}px`;

  return (

    <div className={classes["contact-container"]}>
        <div className={classes["contact-container-top"]}>

        <div className={classes["contact-header"]}>
        <h2 className={classes["contact-title"]}>Willkommen auf unserer Kontaktseite für die Dorfgemeinschaft!</h2>
     <h4 className={classes["contact-subtitle"]}>Hier können Sie uns auf einfache Weise kontaktieren, um uns Fragen zu stellen, Feedback zu geben oder uns über Veranstaltungen oder Aktivitäten in der Gemeinde zu informieren. </h4>
     <h4 className={classes["contact-subtitle"]}>Wir sind stolz darauf, eine enge und freundliche Gemeinschaft zu sein, die sich darauf konzentriert, das Leben in unserem Dorf so angenehm wie möglich zu gestalten. Wir freuen uns darauf, von Ihnen zu hören und helfen gerne bei allem, was wir können! </h4>
        </div>
        <div className={classes["contact-body"]}>
            <h3 className={classes["indication"]}>Benutzen Sie bitte das unten stehende Formular</h3>
        <EmailForm/>

        </div>

        </div>
       
        <h3 className={classes["indication1"]}>Oder nutzen Sie bitte das Whatsapp Link (nur Mobile)</h3>
    <div className={classes["whatsapp-input"]}>
        <img className={classes.whatsappIcon} src={whatsapp} alt="Whatsapp Icon"/>
         {/* <input className={classes.formTextarea}
        type="text"
        value={message}
        onChange={handleMessageChange}
        style={{ height: height, fontSize: fontSize }}
        placeholder="Type your message..."
        
      /> */}
       <textarea className={classes.formTextarea} type="text" value={message}  onChange={handleMessageChange} style={{ height: height, fontSize: fontSize }}
        placeholder="Bitte schreiben Sie Ihre Nachricht hier..."required />
      <button className={classes.formButton} onClick={handleSendMessage}>Send</button>
    </div>
    </div>
    
  )
}

export default Contact