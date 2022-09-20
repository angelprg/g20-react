import React from "react";
import { Route, Routes } from "react-router-dom";
import UserContextProvider from "../contexts/UserContext";
import Home from "./Home/Home";
import LoginForm from "./LoginForm";
import Nav from "./Nav/Nav";

const App = () => {
  return (
    <UserContextProvider>
      <Nav />
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
