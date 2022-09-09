import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (text) =>
    setTodoList([...todoList, { text, completed: false }]);

  const removeTodo = (index) =>
    setTodoList(todoList.filter((_, i) => i !== index));

  const completeTodo = (index) => {
    setTodoList(
      todoList.map((item, i) => {
        if (i !== index) {
          return item;
        } else {
          return { ...item, completed: !item.completed };
        }
      })
    );
  };

  const removeAll = () => setTodoList([]);

  console.log("todoList", todoList);

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} removeTodo={removeTodo} completeTodo={completeTodo}/>
      <button onClick={removeAll}>Remove All</button>
    </div>
  );
};

export default TodoApp;
