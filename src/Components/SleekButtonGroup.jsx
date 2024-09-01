import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import "./SleekButtonGroup.css";

const SleekButtonGroup = ({ children, ...props }) => {
  return (
    <ButtonGroup className="sleek-button-group" variant="contained" {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Button) {
          return React.cloneElement(child, { 
            className: `${child.props.className || ''} sleek-button`,
            disableElevation: true 
          });
        }
        return child;
      })}
    </ButtonGroup>
  );
};

export default SleekButtonGroup;