import React, { useState, useEffect } from "react";
import "./Recruitment.css";
import { ChromeHearts } from "../Assets";
import RushEventInfo from "../Components/RushEventInfo";
import DownPointerButton from "../Components/DownPointerButton";
import RushButton from "../Components/RushButton";
import { TimelessAudio } from "../Assets";

export default function Recruitment() {
  const [isLoading, setIsLoading] = useState(true);

  const events = [
    {
      name: "Meet The Bros",
      date: "Tuesday, April 1st",
      location: "SB1 2200 and Merage Terrace",
      attire: "Casual",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Open Invite",
    },
    {
      name: "Alumni Night",
      date: "Thursday, April 3rd",
      location: "SB1 1200",
      attire: "Business Professional",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Open Invite",
    },
    {
      name: "Game Night",
      date: "Friday, April 4th",
      location: "SB1 1200",
      attire: "Business Casual",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Open Invite",
    },
    {
      name: "Social Barbeque",
      date: "Tuesday, April 8th",
      location: "Sent via Email",
      attire: "Casual",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Invite Only",
    },
    {
      name: "Interviews",
      date: "Thursday + Friday, April 10th and 11th",
      location: "Sent via Email",
      attire: "Business Professional",
      time: "6:00 PM - 9:00 PM",
      "open-ness": "Invite Only",
    },
  ];

  const [audio] = useState(new Audio(TimelessAudio));

  useEffect(() => {
    // Set up audio
    audio.loop = true;
    
    // Start playing when component mounts
    audio.play().catch(error => {
      console.log("Audio playback failed:", error);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  useEffect(() => {
    const img = new Image();
    img.src = ChromeHearts;
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
        <h1 className="main-recruitment-Title">Timeless</h1>
        <p className="subTitle">Spring Rush 2025</p>
        <RushButton href="https://docs.google.com/forms/d/e/1FAIpQLScFxDkUrW7QN0_sEpIi4Wk0yjCoLLfLSBh0UvqAe9hfHfhcKQ/formResponse?pli=1">
          Rush Application
        </RushButton>
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
