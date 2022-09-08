import {useState} from 'react'
import Abuelo from "./components/PropDrilling/Abuelo";

function App() {
  const fruta = "Manzana"
  const [nombre, setNombre] = useState("Angel");
  return (
    <div className="App">
      Hola Koders: {nombre}
      <Abuelo fruta={fruta} setNombre={setNombre} nombre={nombre}/>
    </div>
  );
}

export default App;
