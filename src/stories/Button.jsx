// src/components/Button.jsx
import React from "react";
import "./button.css";

const Button = ({ label, variant, size, icon, disabled }) => {
  return (
    <button
      className={`btn ${variant} ${size} ${icon ? "with-icon" : ""}`}
      disabled={disabled}
    >
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
