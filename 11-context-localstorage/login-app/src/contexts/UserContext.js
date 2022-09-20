import React, { useEffect, useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({token: null});
  useEffect(()=>{
    if ( user?.token ){
      localStorage.setItem('token', user.token)
    }
    else {
      localStorage.removeItem('token')
    }
  },[user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
