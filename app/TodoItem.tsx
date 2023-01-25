"use client";

import React, { ReactNode, useState } from "react";

import Checkbox from "./Checkbox";

type TodoItemProps = {
  body: ReactNode;
  checked: ReactNode;
};

function TodoItem({ body, checked }: TodoItemProps) {
  const [check, setCheck] = useState(0);

  function checkHandler() {
    check === 0 ? setCheck(1) : setCheck(0);
  }

  return (
    <form action="#" method="post" className="w-full m-0 h-14 items-center">
      <div className="h-full flex items-center justify-start">
        <Checkbox onCheck={checkHandler} />
        <p
          className={
            "font-primary select-none text-light-greyish-blue-400 w-full mt-1 mr-3 outline-none caret-light-greyish-blue-200 p-0 " +
            (check === 1 && " line-through")
          }
        >
          {body}
        </p>
      </div>
    </form>
  );
}

export default TodoItem;
