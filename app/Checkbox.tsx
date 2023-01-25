import React from "react";

function Checkbox({ onCheck, check, todoId }: any) {
  return (
    <div className="relative z-0">
      <input
        type="checkbox"
        className="block peer
              w-[1.4rem] h-[1.4rem] mx-4 appearance-none border border-light-greyish-blue-100 rounded-full
              checked:bg-gradient-to-br checked:from-check-1 checked:to-check-2
              "
        onChange={onCheck}
        checked={check}
      />
      <div className="absolute pointer-events-none top-[0.42rem] left-[1.36rem] block w-3 h-3 peer-checked:bg-iconCheck peer-checked:bg-contain peer-checked:bg-no-repeat"></div>
    </div>
  );
}

export default Checkbox;
