import Padre from "./Padre";

const Abuelo = (props) => {
  console.log('props', props)
  // const fruta = props.fruta;
  // const setNombre = props.setNombre
  // const nombre = props.nombre
  const {fruta, setNombre, nombre} = props;



  // const miObjeto = {
  //   prop1: 1,
  //   prop2: true,
  //   prop3: 'tres'
  // }

  // const {prop1, prop2, prop3} = miObjeto;
  // const prop1 = miObjeto.prop1;

  // console.log('prop3', prop3)
  // console.log('prop1', prop1)
  // console.log('prop2', prop2)

  return (
    <div>
      Abuelo
      <Padre fruta={fruta} setNombre={setNombre} nombre={nombre} />
    </div>
  );
};

export default Abuelo;
