import React, { ReactNode } from "react";

import Checkbox from "./Checkbox";

type TodoItemProps = {
  body: ReactNode;
  checked: ReactNode;
};

function TodoItem({ body, checked }: TodoItemProps) {
  return (
    <form action="#" method="post" className="w-full m-0 h-14 items-center">
      <div className="h-full flex items-center justify-start">
        <Checkbox />
        <p className="font-primary text-light-greyish-blue-400 w-full mt-1 mr-3 outline-none caret-light-greyish-blue-200 p-0">
          {body}
        </p>
      </div>
    </form>
  );
}

export default TodoItem;
