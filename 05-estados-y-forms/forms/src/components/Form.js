import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [payload, setPayload] = useState(null)

  const limitName = 15 - name.length

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changeName = (e) => setName(e.target.value)
  const changePassword = (e) => setPassword(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayload({name, email, password})
  }

  if(payload){
    return(<h2>Gracias por llenar el formulario</h2>)
  }

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputName">Nombre</label>
        <input type="text" id="inputName" placeholder="Angel" value={name} onChange={changeName}/>
        <label htmlFor="inputEmail">Email</label>
        <input type="email" id="inputEmail" value={email} onChange={changeEmail} />
        <label htmlFor="inputPassword">Contraseña</label>
        <input type="password" id="inputPassword" value={password} onChange={changePassword} />
        <button type="submit">Enviar</button>
      </form>
      <div>Te restan: {limitName} caracteres</div>
    </div>
  );
};

export default Form;
