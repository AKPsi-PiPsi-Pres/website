import React, { useEffect, useRef } from "react";
import "./ActiveBrother.css";
import { headshotHash } from "../Assets/headshot";

export default function ActiveBrother({ brotherInfo }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections =
      containerRef.current.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  function splitItems(text) {
    if (!text) return [];
    // \r\n (Windows), \n (Unix), \r (old Mac) line breaks
    // Replace all types of line breaks with \n for consistency
    const normalizedText = text.replace(/\r\n|\r|\n/g, '\n');
    // Split on double line breaks and filter out empty strings
    const result = normalizedText.split('\n\n')
      .map(item => item.trim())
      .filter(item => item.length > 0);
    return result;
  }

  const [
    name,
    hometown,
    major,
    pledgeClass,
    graduationYear,
    linkedinUrl,
    interestsRaw,
    experienceRaw,
    askMeAboutRaw,
    loveStatement,
    favoriteSong,
  ] = brotherInfo;

  const interests = splitItems(interestsRaw);
  const experience = splitItems(experienceRaw);
  const askMeAbout = splitItems(askMeAboutRaw);

  const renderList = (items) => {
    if (!Array.isArray(items)) {
      console.error("renderList received non-array input:", items);
      return null;
    }
    return (
      <ul className="brother-list">
        {items.map((item, index) => (
          <li key={index} className="brother-list-item">
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="brother-container" ref={containerRef}>
      <div className="brother-header animate-on-scroll">
        <img
          src={
            headshotHash[name]
              ? headshotHash[name]
              : headshotHash["Default Headshot"]
          }
          alt={name}
          className="brother-photo"
        />
        <div className="brother-info">
          <h2 className="brother-name">{name}</h2>
          <p className="brother-detail">Hometown: {hometown}</p>
          <p className="brother-detail">Major: {major}</p>
          <p className="brother-detail">Class: {pledgeClass}</p>
          <p className="brother-detail">Graduation Year: {graduationYear}</p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            LinkedIn
          </a>
        </div>
        {favoriteSong && (
          <div className="brother-soundtrack">
            <div
              className="brother-soundtrack"
              dangerouslySetInnerHTML={{ __html: favoriteSong }}
            ></div>
          </div>
        )}
      </div>
      <div className="brother-details">
        <div className="brother-section animate-on-scroll">
          <h3>Interests</h3>
          {renderList(interests)}
        </div>
        <div className="brother-section animate-on-scroll">
          <h3>Experience</h3>
          {renderList(experience)}
        </div>
        <div className="brother-section animate-on-scroll">
          <h3>Ask Me About</h3>
          {renderList(askMeAbout)}
        </div>
      </div>
      <div className="brother-love animate-on-scroll">
        <h3>Why I Love AKPsi</h3>
        <p>{loveStatement}</p>
      </div>
    </div>
  );
}
