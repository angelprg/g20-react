import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";


const Nav = () => {
  const {user, setUser} = useContext(UserContext);
  const loggedIn = !!user?.token
  const navigate = useNavigate()
  const logOut = ()=>{
    setUser(null)
    navigate('/login');
  }

  return (
    <nav style={{display:'flex', justifyContent: 'space-around'}}>
      {loggedIn ? <span onClick={logOut}>Log Out</span> :<Link to="login">Login</Link>}
      <Link to="home">Home</Link>
    </nav>
  );
};

export default Nav;
