"use client";

import React, { useState } from "react";

import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

function TodoList() {
  const todoInit = [
    { body: "Complete online JavaScript course", completed: false },
    { body: "Jog around the park 3x", completed: false },
    { body: "10 minutes meditation", completed: false },
    { body: "Read for 1 hour", completed: false },
    { body: "Pick up groceries", completed: false },
    { body: "Complete Todo app on Frontend Mentor", completed: false },
  ];
  const [todos, setTodos] = useState(todoInit);

  return (
    <div className="rounded-lg mt-5 bg-[#ffffff]">
      <ul>
        {todos.map((todo) => (
          <li key={todo.body}>
            <TodoItem body={todo.body} checked={todo.completed} />
            <hr className=" border-light-greyish-blue-100" />
          </li>
        ))}
      </ul>
      <TodoFooter />
    </div>
  );
}

export default TodoList;
