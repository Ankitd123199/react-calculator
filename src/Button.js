import React from "react";
export const Button = ({ value, action }) => (
  <button id={value} style={{ width: "100%" }} onClick={action}>
    {value}
  </button>
);