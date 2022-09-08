const Hijo = ({fruta, setNombre}) => {
  return (
    <div>
      <span>Hijo recibió: {fruta} </span>
      <button onClick={()=>{setNombre("Ferdi")}}>Cambiar Nombre</button>
    </div>
  );
};

export default Hijo;
