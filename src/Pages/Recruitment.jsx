import React from "react";
import "./Recruitment.css";
import { Dune } from "../Assets";
import DuneButton from "../Components/RushButton";
export default function Recruitment() {
  return (
    <div
      className="recruitmentContainer"
      style={{
        backgroundImage: `url(${Dune})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="heroSection">
        <h1 className="mainTitle">Rise</h1>
        <p className="subTitle">Fall Rush 2024</p>
        <DuneButton href="instagram.com/akpsiuci">Rush Application</DuneButton>
      </div>
    </div>
  );
}
