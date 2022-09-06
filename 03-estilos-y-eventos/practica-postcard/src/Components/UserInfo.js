import React from "react";

const UserInfo = (props) => {
  const name = props.name
  const email = props.email

  return (
    <div className="userInfo">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="user"
      />
      <div className="info">
        <div className="userName">{name}</div>
        <div className="userEmail">{email}</div>
      </div>
    </div>
  );
};

export default UserInfo;
