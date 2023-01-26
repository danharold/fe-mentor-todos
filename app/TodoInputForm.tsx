"use client";

import React from "react";
import Checkbox from "./Checkbox";

function TodoInputForm({ onSubmit }: any) {
  return (
    <>
      <form
        action="#"
        method="post"
        className="w-full bg-[#ffffff] mt-4 h-14 items-center rounded-lg dark:bg-dark-very-dark-desat-blue"
        onSubmit={onSubmit}
      >
        <div className="h-full flex items-center justify-start">
          <Checkbox />
          <input
            type="text"
            placeholder="Create a new todo..."
            className="font-primary w-full mt-1 mr-3 outline-none caret-light-greyish-blue-200 p-0 dark:bg-dark-very-dark-desat-blue"
          />
        </div>
      </form>
    </>
  );
}

export default TodoInputForm;
