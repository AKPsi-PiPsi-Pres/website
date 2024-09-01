import React, { useState, useEffect } from "react";
import "./Recruitment.css";
import { Dune } from "../Assets";
import DuneButton from "../Components/RushButton";

export default function Recruitment() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = Dune;
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      });
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      ) : (
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
            <DuneButton href="https://instagram.com/akpsiuci">Rush Application</DuneButton>
          </div>
        </div>
      )}
    </>
  );
}
