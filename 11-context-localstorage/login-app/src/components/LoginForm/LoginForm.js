import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch("http://localhost", {method: "POST", body: JSON.stringify({...formData})})
    // data = response.json()
    // response = JSON.parse(data)
    const response = { success: true, token: "ASDF12346656456" };
    if (response.success && response.token) {
      setUser({ token: response.token });
      navigate('/home')
    }
  };

  return (
    <div>
      <h1>Inicia Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default LoginForm;
