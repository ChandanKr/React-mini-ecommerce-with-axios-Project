import React, { useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

export default function Category({ finalCategory, setCatName }) {
  let [arrowAction, setArrowAction] = useState(false);
  let cat = finalCategory.map((item, index) => {
    return (
      <li
        onClick={() => setCatName(item)}
        className="pl-2 md:pl-4 bg-gray-300 cursor-pointer text-lg font-medium font-serif mb-2"
        key={index}
      >
        {item}
      </li>
    );
  });

  return (
    <div className="border border-black rounded-md">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-[1.5rem] font-semibold pl-2 md:pl-4 mb-2">
          Categories:
        </h3>
        {arrowAction ? (
          <IoIosArrowDropdownCircle
            onClick={() => setArrowAction(!arrowAction)}
            className="mr-[10px] text-[1.5rem]"
          />
        ) : (
          <IoIosArrowDroprightCircle
            onClick={() => setArrowAction(!arrowAction)}
            className="mr-[10px] text-[1.5rem]"
          />
        )}
      </div>
      <ul className={arrowAction ? "block" : "hidden"}>{cat}</ul>
    </div>
  );
}
