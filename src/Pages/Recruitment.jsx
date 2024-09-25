import React, { useState, useEffect } from "react";
import "./Recruitment.css";
import { Dune } from "../Assets";
import DuneButton from "../Components/RushButton";
import RushEventInfo from "../Components/RushEventInfo";
import DownPointerButton from "../Components/DownPointerButton";

export default function Recruitment() {
  const [isLoading, setIsLoading] = useState(true);

  const events = [
    {
      name: "Meet The Bros",
      date: "Tuesday, October 1st",
      location: "SB1 2200 and Merage Terrace",
      attire: "Casual",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Open Invite",
    },
    {
      name: "Alumni Night",
      date: "Thursday, October 3rd",
      location: "SB1 1200",
      attire: "Business Professional",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Open Invite",
    },
    {
      name: "Game Night",
      date: "Friday, October 4th",
      location: "SB1 1200",
      attire: "Business Casual",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Open Invite",
    },
    {
      name: "Social Barbeque",
      date: "Tuesday, October 8th",
      location: "Sent via Email",
      attire: "Casual",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Invite Only",
    },
    {
      name: "Interviews",
      date: "Thursday + Friday, October 10th and 11th",
      location: "Sent via Email",
      attire: "Business Professional",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Invite Only",
    },
  ];

  useEffect(() => {
    const img = new Image();
    img.src = Dune;
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="recruitmentContainer">
      <div className="hero-recruitment-Section viewport">
        <h1 className="main-recruitment-Title">Rise</h1>
        <p className="subTitle">Fall Rush 2024</p>
        <DuneButton href="https://docs.google.com/forms/d/e/1FAIpQLScFxDkUrW7QN0_sEpIi4Wk0yjCoLLfLSBh0UvqAe9hfHfhcKQ/formResponse?pli=1">
          Rush Application
        </DuneButton>
      </div>
      {events.map((event, index) => (
        <div key={index} className="viewport">
          <RushEventInfo event={event} />
        </div>
      ))}
      <DownPointerButton />
    </div>
  );
}
