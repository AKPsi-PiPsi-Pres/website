import React, { useState, useEffect } from "react";
import "./Recruitment.css";
import { Dune } from "../Assets";
import DuneButton from "../Components/RushButton";
import RushEventInfo from "../Components/RushEventInfo";
import DownPointerButton from "../Components/DownPointer";

export default function Recruitment() {
  const [isLoading, setIsLoading] = useState(true);

  const events = [
    {
      name: "Meet The Bros",
      date: "2024-09-15",
      location: "SB1 1200",
      attire: "Casual",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Open Invite",
    },
    {
      name: "Alumni Night",
      date: "2024-10-05",
      location: "SB1 1200",
      attire: "Business Professional",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Open Invite",
    },
    {
      name: "Game Night",
      date: "2024-09-22",
      location: "SB1 1200",
      attire: "Business Casual",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Open Invite",
    },
    {
      name: "Social Barbeque",
      date: "2024-11-12",
      location: "Sent via Email",
      attire: "Casual",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Invite Only",
    },
    {
      name: "Interviews",
      date: "2024-10-28",
      location: "Emerald Bay A & B",
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
      <div className="loaderContainer">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="recruitmentContainer">
      <div className="heroSection viewport">
        <h1 className="mainTitle">Rise</h1>
        <p className="subTitle">Fall Rush 2024</p>
        <DuneButton href="https://instagram.com/akpsiuci">
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
