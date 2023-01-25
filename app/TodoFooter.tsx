import React, { useState } from "react";

function TodoFooter({ handleFilter, filter }: any) {
  return (
    <div className="grid grid-flow-col auto-cols-fr items-center justify-between mx-5 h-8 mt-[0.125rem] gap-0">
      <p className="font-primary text-xs text-light-greyish-blue-200 select-none">
        5 items left
      </p>
      <div className="grid grid-flow-col gap-3">
        <button
          id="All"
          onClick={handleFilter}
          className={
            "font-primary text-xs cursor-pointer select-none text-light-greyish-blue-300 hover:text-light-greyish-blue-400 " +
            (filter === "All" && "text-primary")
          }
        >
          All
        </button>
        <button
          id="Active"
          onClick={(e) => {
            handleFilter(e.currentTarget.id);
          }}
          className={
            "font-primary text-xs text-light-greyish-blue-300 cursor-pointer select-none hover:text-light-greyish-blue-400 " +
            (filter === "Active" && "text-primary")
          }
        >
          Active
        </button>
        <button
          id="Completed"
          onClick={handleFilter}
          className={
            "font-primary text-xs text-light-greyish-blue-300 cursor-pointer select-none hover:text-light-greyish-blue-400 " +
            (filter === "Completed" && "text-primary")
          }
        >
          Completed
        </button>
      </div>
      <p className="font-primary text-xs text-light-greyish-blue-300 cursor-pointer select-none text-right">
        Clear Completed
      </p>
    </div>
  );
}

export default TodoFooter;
