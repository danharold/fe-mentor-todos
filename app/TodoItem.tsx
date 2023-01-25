"use client";

import React, { ReactNode, useState } from "react";

import Checkbox from "./Checkbox";

function TodoItem({ body, completed, onCheck }: any) {
  return (
    <form action="#" method="post" className="w-full m-0 h-14 items-center">
      <div className="h-full flex items-center justify-start">
        <Checkbox onCheck={onCheck} check={completed} todoId={body} />
        <p
          className={
            "font-primary select-none text-light-greyish-blue-400 w-full mt-1 mr-3 outline-none caret-light-greyish-blue-200 p-0 " +
            (completed === true && " line-through")
          }
        >
          {body}
        </p>
      </div>
    </form>
  );
}

export default TodoItem;
