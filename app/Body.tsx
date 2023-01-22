import React from "react";
import Image from "next/image";

import iconMoon from "../fe-mentor-resources/images/icon-moon.svg";
import iconSun from "../fe-mentor-resources/images/icon-sun.svg";
import bgLight from "../fe-mentor-resources/images/bg-desktop-light.jpg";

function Body() {
  return (
    <div className="max-w-xl mx-auto flex items-center px-10 justify-start mt-16">
      <h1 className="font-primary font-bold text-4xl text-light-grey flex-grow mt-2">
        T O D O
      </h1>
      <Image src={iconMoon} alt="theme switcher" className="w-6 h-fit" />
    </div>
  );
}

export default Body;
