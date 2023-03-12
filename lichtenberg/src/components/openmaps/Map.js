
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import React, {useState,useEffect} from 'react'


function Map() {
  const [myVariable, setMyVariable] = useState("300px");

  // const handleResize = () => {
  //   if (window.innerWidth < 365) {
  //     setMyVariable('300px');
  //   } else if (window.innerWidth > 425){
  //     setMyVariable('400px');
  //   } else {
  //     setMyVariable('370px');
  //   }
  // };

  // useEffect(() => {
   
  //   window.addEventListener('resize', handleResize);
  
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // console.log(myVariable);
  // console.log(window.innerWidth);


  return (
   
    
     <MapContainer center={[50.899, 7.7055]} zoom={13} style={{ height: `${myVariable}` , width:`${myVariable}`}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.899, 7.7055]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >

        <Popup>
          
        Naturnah leben, Heimat erleben <br /> - Willkommen in Lichtenberg!
        </Popup>
      </Marker>
    
    </MapContainer>
  
   
  )
}

export default Map;
