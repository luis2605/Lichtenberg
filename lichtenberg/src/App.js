import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import React, { useState, useEffect } from 'react';
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import Cookies from 'js-cookie';
import CookieModal from '../src/components/cookies/cookieModal';
import UberUns from "./components/uberUns/UberUns";
import Aktuelles from "./components/aktuelles/Aktuelles";
import Mitglied from "./components/mitglied/Mitglied";
import Contact from "./components/contact/Contact";
import Spenden from "./components/spenden/Spenden";
import Impressum from "./components/impressum/Impressum";
import Datenschutz from "./components/datenschutz/Datenschutz";

function App() {

  /*checking for cookies  */

 
  const [showModal, setShowModal] = useState(false);


  

  const handleCloseModal = () => {
    Cookies.set('mywebsite', 'true', { expires: 365 });
    setShowModal(false);
  };

  useEffect(() => {
    const hasCookieConsent = Cookies.get('mywebsite');
    setShowModal(!hasCookieConsent);
    }
  , []);

    // scroll to the beginning of the page

    const scrollUp =()=>{
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  return (


    <div className="mega-container">

    {/* <div>
     <button onClick={handleSetCookie}>Set Cookie</button>
      <button onClick={handleGetCookie}>Get Cookie</button>
      <button onClick={handleRemoveCookie}>Remove Cookie</button>

      {cookieValue && <p>Cookie Value: {cookieValue}</p>} 
      </div>   */}


      {showModal && (
        <div className="overlay">
          <CookieModal handleClose={handleCloseModal} />
        </div>
      )}


   
    
     <Header></Header>
     
      <Routes>
        <Route path="/Lichtenberg" element={<Home />}></Route>
        <Route path="/%C3%BCber" element={<UberUns />}></Route>
        <Route path="/aktuelles" element={<Aktuelles />}></Route>
        <Route path="/mitglied" element={<Mitglied />}></Route>
        <Route path="/kontakt" element={<Contact />}></Route>
        <Route path="/spenden" element={<Spenden />}></Route>
        <Route path="/impressum" element={<Impressum />}></Route>
        <Route path="/datenschutz" element={<Datenschutz />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );

  /* testing  */
}

export default App;
