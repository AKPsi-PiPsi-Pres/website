import React, { useState, useEffect } from "react";
import "./Recruitment.css";
import { ChromeHearts } from "../Assets";
import RushEventInfo from "../Components/RushEventInfo";
import DownPointerButton from "../Components/DownPointerButton";
import RushButton from "../Components/RushButton";
import { TimelessAudio } from "../Assets";

export default function Recruitment() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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

  // Detect if user is on mobile
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|iPad|iPhone|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
  }, []);

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

  // Get the appropriate calendar link based on device
  const getCalendarLink = () => {
    const calendarId = "MTM4ZGI0YWFlZDBlYzlmYTE1NTU2Y2E1ZmZmZjcwZjkzODI0ODk2ZmI4ZWM5NTAwMTNhY2E3YTAxMzlmYmExY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t";
    
    if (isMobile) {
      // Mobile app deep links
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // iOS deep link
        return `googlecalendar://addcalendar?cid=${calendarId}`;
      } else {
        // Android deep link
        return `intent://calendar/addcalendar?cid=${calendarId}#Intent;scheme=googlecalendar;package=com.google.android.calendar;end`;
      }
    } else {
      // Web link for desktop
      return `https://calendar.google.com/calendar/u/0?cid=${calendarId}`;
    }
  };

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
        <div className="rush-buttons">
          <a 
            href={getCalendarLink()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="calendar-button"
          >
            Add Rush Events to Calendar
          </a>
          <RushButton href="https://forms.gle/1bS5VebGJoLP8dJu5">
            Rush Application
          </RushButton>
        </div>
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