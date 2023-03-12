import React from 'react';
import classes from  '../modalMap/mapModal.module.css'
import Map from "../openmaps/Map";

function MapModal(props) {
  const { show, handleClose } = props;

  

  return (
    <div className={classes.modalStyles}>
          <Map/>
    </div>
  );
}

export default MapModal;
