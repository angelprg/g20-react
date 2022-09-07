import React, { useState } from "react";

const mostrarAgua = (temperatura) => {
  if (temperatura < 0) return "Hielo";
  if (temperatura > 98) return "Gas";
  return "Agua";
};

const Agua = (props) => {
  const [temperatura, setTemperatura] = useState(props.temperatura);

  const hervir = () => setTemperatura(100)
  const congelar = () => setTemperatura(-10)
  const derretir = () => setTemperatura(20)

  console.log('Ejecutando componente')
  

  return (
    <div>
      <div>{mostrarAgua(temperatura)}</div>
      <button onClick={hervir}>Hervir</button>
      <button onClick={congelar}>Congelar</button>
      <button onClick={derretir}>Derretir</button>
      <div>{temperatura}</div>
    </div>
  );
};

export default Agua;
