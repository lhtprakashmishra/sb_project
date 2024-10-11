// src/components/Input.jsx
import React from "react";
import "./input.css";

const Input = ({
  type,
  placeholder,
  size,
  variant,
  disabled,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={`input ${variant} ${size}`}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
