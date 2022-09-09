import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ text, completed, completeTodo, index }) => {
  return (
    <span
      className={completed ? styles.completed : ""}
      onClick={() => completeTodo(index)}
    >
      {text}
    </span>
  );
};

export default TodoItem;
