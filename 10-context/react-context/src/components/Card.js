import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Card = () => {
  const user = useContext(UserContext);
  return <div>
    Card {user.name}
    </div>;
};

export default Card;
