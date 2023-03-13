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
import Spenden from "./components/header/spenden/Spenden";

function App() {

  /*adding cookies */

  const [cookieValue, setCookieValue] = useState('');
  const [showModal, setShowModal] = useState(true);

  const handleSetCookie = () => {
    Cookies.set('cookieName', 'cookieValue', { expires: 7 });
  };

  const handleGetCookie = () => {
    const value = Cookies.get('cookieName');
    console.log(value)
    
  };

  const handleRemoveCookie = () => {
    Cookies.remove('cookieName');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    
  };

  useEffect(() => {
    const value = Cookies.get('cookieName');
    setCookieValue(value);
    if (!value) {
      
      setShowModal(true);
      console.log(cookieValue)
    }
  }, []);
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
        <Route path="/über" element={<UberUns />}></Route>
        <Route path="/aktuelles" element={<Aktuelles />}></Route>
        <Route path="/mitglied" element={<Mitglied />}></Route>
        <Route path="/kontakt" element={<Contact />}></Route>
        <Route path="/spenden" element={<Spenden />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );

  /* testing  */
}

export default App;
