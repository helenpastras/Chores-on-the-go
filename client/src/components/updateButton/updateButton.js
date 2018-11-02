import React from "react";
import { Button } from "reactstrap"
import "./updateButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

const updateButton = props => (
  <Button color="info" {...props}>Update</Button>
);

export default updateButton;
