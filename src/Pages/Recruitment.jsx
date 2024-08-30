import React from "react";
import "./Recruitment.css";
import { jacobPNG } from "../Assets";

export default function Recruitment() {
  return (
    <div 
      className="recruitmentContainer"
      style={{
        backgroundImage: `url(${jacobPNG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="heroSection">
        <h1 className="mainTitle">INSERT RUSH THEME</h1>
        <p className="subTitle">Fall Rush 2024</p>
        <a href="#" className="rushButton">Rush Application</a>
      </div>
    </div>
  );
}
