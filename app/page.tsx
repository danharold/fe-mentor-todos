import React from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function Home() {
  return (
    <>
      <TodoList />
      <p className="text-center mt-8 font-primary text-xs text-light-greyish-blue-300 mx-auto">
        Drag and drop to reorder list
      </p>
    </>
  );
}

export default Home;
