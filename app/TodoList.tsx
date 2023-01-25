"use client";

import React, { useState } from "react";

import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

function TodoList() {
  const todoInit = [
    { body: "Complete online JavaScript course", completed: true },
    { body: "Jog around the park 3x", completed: false },
    { body: "10 minutes meditation", completed: false },
    { body: "Read for 1 hour", completed: false },
    { body: "Pick up groceries", completed: false },
    { body: "Complete Todo app on Frontend Mentor", completed: false },
  ];
  const [todos, setTodos] = useState(todoInit);
  const [filter, setFilter] = useState("All");

  function filterTodos(state: string) {
    switch (state) {
      case "All":
        return todos;
      case "Active":
        return Object.fromEntries(
          Object.entries(todos).filter((key) => key[1].completed === false)
        );
      case "Completed":
        return Object.fromEntries(
          Object.entries(todos).filter((key) => key[1].completed === true)
        );
      default:
        return todos;
    }
  }

  function filterHandler(event: any) {
    setFilter(event.currentTarget.id);
  }

  const filteredTodos = filterTodos(filter);

  console.log(filter);
  console.log(filteredTodos);

  return (
    <div className="rounded-lg shadow-sm mt-5 bg-[#ffffff]">
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.body}>
            <TodoItem body={todo.body} check={todo.completed} />
            <hr className=" border-light-greyish-blue-100" />
          </li>
        ))}
      </ul>
      <TodoFooter handleFilter={filterHandler} filter={filter} />
    </div>
  );
}

export default TodoList;
