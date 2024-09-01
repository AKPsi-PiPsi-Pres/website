import React from "react";
import { Button, styled } from "@mui/material";

const SleekDarkButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #1565C0 40%, #1976D2 90%)",
  border: 0,
  borderRadius: 5,
  color: "#F5F5F5",
  height: 48,
  padding: "0 30px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: "linear-gradient(45deg, #1976D2 30%, #1565C0 90%)",
    boxShadow: "0 4px 6px 2px rgba(25, 118, 210, .5)",
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
