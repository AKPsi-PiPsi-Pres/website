// FOR FUTURE REFERENCE, JUST ASK CHAT GPT TO "REWRITE THIS CODE TO MAKE A BUTTON THAT FUNCTIONS THE EXACT
// SAME WAS AS THE ONE PROVIDED BELOW: [copy paste current code]  However, make it cater to [current rush theme]
//such that it is on a site with the given theme and it should look appropriate in color
//and animations for this specific theme."

import React from "react";
import { Button, styled, keyframes } from "@mui/material";

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const DuneButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, 
    rgba(210, 180, 140, 0.9) 0%,
    rgba(189, 154, 107, 0.9) 25%,
    rgba(168, 128, 74, 0.9) 50%,
    rgba(189, 154, 107, 0.9) 75%,
    rgba(210, 180, 140, 0.9) 100%)`,
  backgroundSize: "200% 200%",
  animation: `${gradientShift} 10s ease infinite`,
  border: "1px solid rgba(0, 0, 0, 0.3)",
  borderRadius: 3,
  color: "rgba(255, 255, 255, 0.9)",
  height: 48,
  padding: "0 30px",
  fontFamily: "'Orbitron', sans-serif",
  fontWeight: "bold",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundSize: "150% 150%",
    boxShadow: "0 4px 6px 2px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-2px)",
    color: "rgba(255, 255, 255, 1)",
  },
}));

const RushButton = ({ children, ...props }) => {
  return (
    <DuneButton variant="contained" {...props}>
      {children}
    </DuneButton>
  );
};

export default RushButton;
