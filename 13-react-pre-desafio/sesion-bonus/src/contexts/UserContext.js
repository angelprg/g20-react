import React, { useState, useContext } from "react";
import { getUserFromLS, saveUserInLS } from "../lib/loginHelpers";

const UserContext = React.createContext();



const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLS());
  const login = (user, password) => {
    // Fetch login/backend
    if (user === "angel" && password === "asdf") {
      // const token = loginBackend(user, password)
      const token = "ASDF12345";
      //obtener datos del usuario
      // const userData = getUserData(token)
      const userData = { name: "Angel", email: "angel.resendiz@gmail.com", role: "admin"}
      setUser({ token, ...userData });
      saveUserInLS({ token, ...userData })
      return true;
    }
    else {
      return false;
    }
  };

  console.log('user', user)
  return (
    <UserContext.Provider value={{ login, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(UserContext)
