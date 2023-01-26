import React from "react";
import Image from "next/image";

import iconMoon from "../fe-mentor-resources/images/icon-moon.svg";
import iconSun from "../fe-mentor-resources/images/icon-sun.svg";

function TodoHeader({ onClick, dark }: any) {
  function handleDarkMode() {
    return;
  }

  return (
    <div className=" flex items-center">
      <h1 className="font-primary font-bold text-4xl text-light-grey flex-grow mt-2 select-none">
        T O D O
      </h1>
      <button onClick={onClick}>
        <Image
          src={dark ? iconSun : iconMoon}
          alt="theme switcher"
          className="w-6 h-fit select-none"
        />
      </button>
    </div>
  );
}

export default TodoHeader;
