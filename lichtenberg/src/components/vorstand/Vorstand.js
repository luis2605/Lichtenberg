import React, {useState} from 'react'
import classes from "./vorstand.module.css"
import vorstandData from "../../data/vorstandData.js"
import blob from "../../assets/img/blob.svg"

const Vorstand = () => {
 console.log(vorstandData)
   const [vorstandListe ,setVorstandListe]=useState(vorstandData)

   console.log(vorstandListe)

   const vorstandContainer = vorstandListe.map((vorst,index)=>{
    
return(
 

   <div  key={index}   className={classes["vorstand-element"]} >
   
   <div className={classes["vorstand-blob"] }>

   <img src={vorst.img} alt={vorst.name} className={classes["vorstand-img"] } />
   </div>
    

   
   
  
    
    <h2>{vorst.name}</h2>
    <h3>{vorst.position}</h3>
    <h4>{vorst.tel}</h4>
    <h4>{vorst.email}</h4>
   </div>
  
 

)


   })

  return (
    <>
     <h1 className={classes["vorstand-title"]}>Unsere Vorstand :</h1>
     <div className={classes["vorstand-container"]}>
     
      {vorstandContainer}</div>
    </>
   
  )
}

export default Vorstand