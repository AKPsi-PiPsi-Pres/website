import React from "react";
import Logo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import "./Main.css";

export default function Main() {
  return (
    <header className="main-header">
      <Logo />
      <Navbar />
    </header>
  );
}
