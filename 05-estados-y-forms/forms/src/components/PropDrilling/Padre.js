import Hijo from "./Hijo";

const Padre = (props) => {
  
  const {nombre, fruta, setNombre} = props;
  
  return (
    <div>
      Padre {nombre}
      <Hijo fruta={fruta} setNombre={setNombre}/>
    </div>
  );
};

export default Padre;
