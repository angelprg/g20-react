import React from "react";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = ({ todoList, removeTodo, completeTodo }) => {
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index} >
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            completeTodo={completeTodo}
            index={index}
          />
          <button onClick={() => removeTodo(index)}>[x]</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
