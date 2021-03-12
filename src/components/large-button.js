import React from "react";

import { Button } from "react-bootstrap";

import "./../component_styles/large-button.styles.css";

const LargeButton = ({title, url}) => {
  return (
    <Button variant="outline-dark" className="large-button" href={url} >{title}</Button>
  );
}

export default LargeButton;