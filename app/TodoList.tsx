"use client";

import React, { useState } from "react";

import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
import TodoInputForm from "./TodoInputForm";

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
        return todos.filter((todo) => todo.completed === false);
      case "Completed":
        return todos.filter((todo) => todo.completed === true);
      default:
        return todos;
    }
  }

  function filterHandler(event: any) {
    setFilter(event.currentTarget.id);
  }

  function updateCompletion(event: any) {
    const idx = todos.findIndex(
      (todo) => todo.body === event.currentTarget.closest("li").id
    );
    const updatedTodos = [...todos];

    if (todos[idx].completed === true) {
      updatedTodos[idx].completed = false;
      setTodos(updatedTodos);
    } else {
      updatedTodos[idx].completed = true;
      setTodos(updatedTodos);
    }

    return;
  }

  function insertNewTodo(event: any) {
    event.preventDefault();

    const newCompleted = event.target.querySelectorAll("input")[0].checked;
    event.target.querySelectorAll("input")[0].checked = false;

    const newBody = event.target.querySelectorAll("input")[1].value;
    event.target.querySelectorAll("input")[1].value = "";

    const newTodo = {
      body: newBody,
      completed: newCompleted,
    };

    setTodos([...todos, newTodo]);
  }

  function deleteTodo(event: any) {
    event.preventDefault();

    console.log(event.currentTarget.closest("li").id);
    const idx = todos.findIndex(
      (todo) => todo.body === event.currentTarget.closest("li").id
    );
    const updatedTodos = todos.slice();
    updatedTodos.splice(idx, 1);
    console.log(updatedTodos);

    setTodos(updatedTodos);
  }

  console.log("LIST RERENDER");

  const filteredTodos = filterTodos(filter);

  return (
    <>
      <TodoInputForm onSubmit={insertNewTodo} />
      <div className="rounded-lg shadow-sm mt-5 bg-[#ffffff]">
        <ul>
          {filteredTodos.map((todo: any) => (
            <li key={todo.body} id={todo.body}>
              <TodoItem
                body={todo.body}
                completed={todo.completed}
                onCheck={updateCompletion}
                onDelete={deleteTodo}
              />
              <hr className=" border-light-greyish-blue-100" />
            </li>
          ))}
        </ul>
        <TodoFooter handleFilter={filterHandler} filter={filter} />
      </div>
    </>
  );
}

export default TodoList;
