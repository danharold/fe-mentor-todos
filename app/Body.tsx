import React from "react";
import Image from "next/image";

import iconMoon from "../fe-mentor-resources/images/icon-moon.svg";
import iconSun from "../fe-mentor-resources/images/icon-sun.svg";

import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";

function Body() {
  return (
    <div className="max-w-xl mx-auto px-10 mt-16">
      <div className=" flex items-center">
        <h1 className="font-primary font-bold text-4xl text-light-grey flex-grow mt-2 select-none">
          T O D O
        </h1>
        <Image
          src={iconMoon}
          alt="theme switcher"
          className="w-6 h-fit select-none"
        />
      </div>
      <TodoInputForm />
      <TodoList />
    </div>
  );
}

export default Body;
