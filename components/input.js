import React from "react";

const Input = ({ type, name, control, value, onChange, onBlur, placeholder }) => {
  return (
    <input
      control={control}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
      placeholder={placeholder}
    />
  );
};

export default Input;
