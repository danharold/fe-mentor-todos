import React from "react";

function TodoFooter({ handleClear, handleFilter, filter, nTodos }: any) {
  return (
    <div className="grid grid-flow-col auto-cols-fr items-center justify-between mx-5 h-8 mt-[0.125rem] gap-0">
      <p className="font-primary text-xs text-light-greyish-blue-200 select-none dark:text-dark-greyish-blue-300">
        {nTodos} items left
      </p>
      <div className="grid grid-flow-col gap-3">
        <button
          id="All"
          onClick={handleFilter}
          className={
            "font-primary text-xs cursor-pointer select-none text-light-greyish-blue-300 hover:text-light-greyish-blue-400 dark:text-dark-greyish-blue-200 hover:dark:text-dark-greyish-blue-100 " +
            (filter === "All" && "text-primary")
          }
        >
          All
        </button>
        <button
          id="Active"
          onClick={handleFilter}
          className={
            "font-primary text-xs text-light-greyish-blue-300 cursor-pointer select-none hover:text-light-greyish-blue-400 dark:text-dark-greyish-blue-200 hover:dark:text-dark-greyish-blue-100 " +
            (filter === "Active" && "text-primary")
          }
        >
          Active
        </button>
        <button
          id="Completed"
          onClick={handleFilter}
          className={
            "font-primary text-xs text-light-greyish-blue-300 cursor-pointer select-none hover:text-light-greyish-blue-400 dark:text-dark-greyish-blue-200 hover:dark:text-dark-greyish-blue-100 " +
            (filter === "Completed" && "text-primary")
          }
        >
          Completed
        </button>
      </div>
      <button
        onClick={handleClear}
        className="font-primary text-xs text-light-greyish-blue-300 hover:text-light-greyish-blue-400 dark:text-dark-greyish-blue-200 hover:dark:text-dark-greyish-blue-100 cursor-pointer select-none text-right"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFooter;
