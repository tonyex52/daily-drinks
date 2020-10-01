import React from "react";
import "./index.css";

const Input = ({ className, ...props }) => (
  <input className={`Input-component ${className}`} {...props} />
);

export default Input;
