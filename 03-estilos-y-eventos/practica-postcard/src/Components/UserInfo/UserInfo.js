import React from "react";
import styles from './UserInfo.module.scss';

const UserInfo = (props) => {
  const name = props.name
  const email = props.email

  return (
    <div className={styles.userInfo}>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="user"
      />
      <div className={styles.info}>
        <div className={styles.userName}>{name}</div>
        <div className={styles.userEmail}>{email}</div>
      </div>
    </div>
  );
};

export default UserInfo;
