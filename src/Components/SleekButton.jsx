import React from "react";
import { Button, styled } from "@mui/material";

const SleekDarkButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #2196F3 40%, #21CBF7 90%)",
  border: 0,
  borderRadius: 3,
  color: "#F5F5F5",
  height: 48,
  padding: "0 30px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(45deg, #21CBF3 30%, #2196F3 90%)",
    boxShadow: "0 4px 6px 2px rgba(33, 203, 243, .5)",
    transform: "translateY(-2px)",
  },
}));

const SleekButton = ({ children, ...props }) => {
  return (
    <SleekDarkButton variant="contained" {...props}>
      {children}
    </SleekDarkButton>
  );
};

export default SleekButton;
