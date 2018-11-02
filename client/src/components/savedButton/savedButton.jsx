import React from "react";
import "./savedButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <button className="save-btn" {...props}>
    Save Recipe
  </button>
);

export default SaveBtn;
