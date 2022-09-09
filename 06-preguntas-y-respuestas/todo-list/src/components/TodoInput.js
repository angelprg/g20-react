import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar el todo
    addTodo(text);
    // Limpiar el input
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleOnChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
