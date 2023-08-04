import React from "react";

const Label = ({htmlFor, text}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-gray-800"
    >
      {text}
    </label>
  );
};

export default Label;
