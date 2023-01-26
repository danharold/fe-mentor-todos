import React from "react";
import Image from "next/image";

import Checkbox from "./Checkbox";

import iconCross from "../fe-mentor-resources/images/icon-cross.svg";

function TodoItem({ body, completed, onCheck, onDelete }: any) {
  return (
    <div className="group w-full m-0 h-14 items-center">
      <div className="h-full flex items-center justify-start">
        <Checkbox onCheck={onCheck} check={completed} />
        <p
          className={
            "font-primary select-none w-full mt-1 mr-3 outline-none caret-light-greyish-blue-200 p-0 overflow-hidden " +
            (completed === true
              ? " line-through text-light-greyish-blue-200 dark:text-dark-greyish-blue-200"
              : " text-light-greyish-blue-400 dark:text-dark-greyish-blue-100")
          }
        >
          {body}
        </p>
        <button onClick={onDelete}>
          <Image
            src={iconCross}
            alt=""
            className="hidden group-hover:block mr-5 w-3 h-3"
          />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
