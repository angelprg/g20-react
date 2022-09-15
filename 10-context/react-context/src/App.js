import React from "react";
import { UserContextProvider } from "./context/UserContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        Hello Koders!
        <HomePage />
      </div>
    </UserContextProvider>
  );
}
export default App;
