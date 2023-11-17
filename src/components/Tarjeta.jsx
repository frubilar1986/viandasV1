import React from "react";
import { useState } from "react";

const Tarjeta = ({ img, titulo, descrip, precio, handleAgregar,handelQuitar,handleAumentar,handleDisminuir }) => {
  const [added, setAdded] = useState(false);
  
  const addCarri = () => {
    handleAgregar()
    setAdded(true)
    
  }
  
  const quitCarri = () => {
    handelQuitar()
    setAdded(!added)
    
  }
  
  
  

  return (
    <div className="tarjeta">
      <img className="tarjeta-imagen" src={img} />
      <div className="tarjeta-contenido">
        <p className="tarjeta-titulo">{titulo}</p>
        <p className="tarjeta-descricion">{descrip}</p>
        <p className="tarjeta-precio">{precio}</p>
      {!added ? (
          <button type="button" onClick={addCarri} className="boton-agregar">
          Agregar{" "}
        </button>
      ) : (
          <button type="button" onClick={quitCarri} className="boton-quitar">
          Quitar{" "}
        </button>
      )}
        </div>
    </div>
  );
};

export default Tarjeta;
