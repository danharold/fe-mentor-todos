import React, { useState } from "react";

function TodoFooter() {
  const [selection, setSelection] = useState("");

  const buttonHandler = (event: any) => {
    setSelection(event.currentTarget.id);
  };

  return (
    <div className="flex items-center justify-between mx-5 h-8 mt-[0.125rem]">
      <p className="font-primary text-xs text-light-greyish-blue-200 select-none">
        5 items left
      </p>
      <div className="grid grid-flow-col gap-3">
        <button
          id="All"
          onClick={buttonHandler}
          className={
            "font-primary text-xs cursor-pointer select-none text-light-greyish-blue-300 hover:text-light-greyish-blue-400 " +
            (selection === "All" && "text-primary")
          }
        >
          All
        </button>
        <button
          id="Active"
          onClick={buttonHandler}
          className={
            "font-primary text-xs text-light-greyish-blue-300 cursor-pointer select-none hover:text-light-greyish-blue-400 " +
            (selection === "Active" && "text-primary")
          }
        >
          Active
        </button>
        <button
          id="Completed"
          onClick={buttonHandler}
          className={
            "font-primary text-xs text-light-greyish-blue-300 cursor-pointer select-none hover:text-light-greyish-blue-400 " +
            (selection === "Completed" && "text-primary")
          }
        >
          Completed
        </button>
      </div>
      <p className="font-primary text-xs text-light-greyish-blue-300 cursor-pointer select-none">
        Clear Completed
      </p>
    </div>
  );
}

export default TodoFooter;
