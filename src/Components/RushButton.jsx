import React from "react";
import { Button, styled, keyframes } from "@mui/material";

const shine = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px rgba(192, 192, 192, 0.3),
                0 0 20px rgba(192, 192, 192, 0.2);
  }
  50% {
    box-shadow: 0 0 15px rgba(192, 192, 192, 0.4),
                0 0 30px rgba(192, 192, 192, 0.3);
  }
`;

const borderFlare = keyframes`
  0%, 100% {
    border-color: rgba(192, 192, 192, 0.6);
  }
  50% {
    border-color: rgba(255, 255, 255, 0.8);
  }
`;

const ChromeButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  background: `linear-gradient(45deg, 
    rgba(40, 40, 40, 1) 0%,
    rgba(25, 25, 25, 1) 25%,
    rgba(15, 15, 15, 1) 50%,
    rgba(25, 25, 25, 1) 75%,
    rgba(40, 40, 40, 1) 100%)`,
  backgroundSize: '200% 200%',
  border: '2px solid rgba(192, 192, 192, 0.6)',
  borderRadius: '4px',
  color: 'silver',
  height: '54px',
  padding: '0 40px',
  fontFamily: "'Old English Text MT', 'Times New Roman', serif",
  fontSize: '1.1rem',
  fontWeight: 'normal',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  animation: `${borderFlare} 3s infinite`,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
    animation: `${shine} 3s infinite`,
    zIndex: 1,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: 'linear-gradient(45deg, transparent, rgba(192, 192, 192, 0.1), transparent)',
    zIndex: -1,
    borderRadius: '4px',
  },

  '&:hover': {
    backgroundSize: '150% 150%',
    color: '#ffffff',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    transform: 'translateY(-2px)',
    animation: `${glowPulse} infinite`,
    textShadow: `
      0 0 5px rgba(255, 255, 255, 0.5),
      0 0 10px rgba(255, 255, 255, 0.3)
    `,

    '&::after': {
      opacity: 1,
    },
  },

  '&:active': {
    transform: 'translateY(1px)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },

  '@media (max-width: 768px)': {
    height: '48px',
    padding: '0 30px',
    fontSize: '1rem',
  },
}));

const RushButton = ({ children, ...props }) => {
  return (
    <div style={{ 
      position: 'relative',
      display: 'inline-block',
      padding: '3px',
      background: 'linear-gradient(45deg, rgba(192, 192, 192, 0.2), rgba(128, 128, 128, 0.1))',
      borderRadius: '6px',
    }}>
      <ChromeButton variant="contained" {...props}>
        {children}
      </ChromeButton>
    </div>
  );
};

export default RushButton;