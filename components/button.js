import React from "react";

const Button = ({text, type, onClick}) => {
  return (
    <button onClick={onClick} type={type} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
      {text}
    </button>
  );
};

export default Button;
