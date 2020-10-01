import React from "react";
import "./index.css";

const Textarea = ({ className, ...props }) => (
  <textarea className={`Textarea-component ${className}`} rows="3" {...props} />
);

export default Textarea;
