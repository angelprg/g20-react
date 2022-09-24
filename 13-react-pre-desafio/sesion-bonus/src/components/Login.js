import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useUser } from "../contexts/UserContext";

const Login = () => {
  const [values, setValues] = useState();
  const [error, setError] = useState(null);
  const {login} = useUser()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('values', values)
    const result = login(values.user, values.password)
    if (!result) setError("Error al iniciar Sesión")
    console.log('result', result)
  };

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  return (
    <>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formUser">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu usuario"
          onChange={handleChange}
          name="user"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          onChange={handleChange}
        />
      </Form.Group>
      <button type="submit">Enviar</button>
    </Form>
    </>
  );
};

export default Login;
