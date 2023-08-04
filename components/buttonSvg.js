import React from "react";

const ButtonSvg = ({type, d}) => {
  return (
    <button
      type={type}
      className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-5 h-5 fill-current"
      >
        <path d={d}></path>
      </svg>
    </button>
  );
};

export default ButtonSvg;
