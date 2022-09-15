import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Footer = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <div>Todos los derechos reservados</div>
      <button onClick={()=>user.setName("Ale")}>Cambiar Nombre</button>
    </div>
  );
};

export default Footer;
