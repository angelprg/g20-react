import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      {user?.token ? <div>Bienvenido</div> :
      <div>No tienes acceso a esta página, debes iniciar sesión</div>}
    </div>
  );
};

export default Home;
