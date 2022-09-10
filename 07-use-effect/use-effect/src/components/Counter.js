import { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");

  const add = () => setValue(value + 1);
  const substract = () => setValue(value - 1);
  const handleChange = (e) => setText(e.target.value);

  useEffect(() => {
    console.log("Ejecutando useEffect");
    if (text.length > 5) {
      alert("Has exedido el número máximo de caracteres (5) ");
      setText(text.slice(0, 5));
    }
  }, [text]);

  if (value > 10 || text !== "") {
    console.log("Es true");
  }

  console.log("value", value);
  return (
    <div>
      <button onClick={substract}>-</button>
      <div>{value}</div>
      <button onClick={add}>+</button>
      <div>
        <input value={text} onChange={handleChange} />
      </div>
      {value > 10 && <Card />}
    </div>
  );
}

export default App;
