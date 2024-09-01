import React, { useEffect, useCallback } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import "./DownPointer.css";

export default function DownPointerButton() {
  const scrollToNextSnapElement = useCallback(() => {
    const elements = document.querySelectorAll("*");
    const currentScrollPosition = window.scrollY;

    for (let element of elements) {
      const style = getComputedStyle(element);
      if (
        style.scrollSnapAlign === "start" &&
        element.offsetTop > currentScrollPosition
      ) {
        element.scrollIntoView({ behavior: "smooth" });
        break;
      }
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const button = document.getElementById("scroll-down-button");
      button.classList.add("pulse");
      setTimeout(() => button.classList.remove("pulse"), 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <button
      id="scroll-down-button"
      className="scroll-down-button"
      onClick={scrollToNextSnapElement}
    >
      <KeyboardDoubleArrowDownIcon size={24} />
    </button>
  );
}
