import React, { useState } from "react";

const UserContext = React.createContext({ name: null });

export const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("Fer");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
