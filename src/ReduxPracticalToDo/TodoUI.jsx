import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./TodoSlicer";

const TodoUI = () => {
  const [todoValue, setTodoValue] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoValue.trim() === "") return;

    dispatch(addTodo(todoValue));
    setTodoValue("");
  };

  return (
    <div>
      <h1>Todo UI Component</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter todo item"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch(deleteTodo(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoUI;
