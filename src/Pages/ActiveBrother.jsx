import React from 'react';
import { Link } from 'react-router-dom';
import './ActiveBrother.css';

export default function ActiveBrother({ brotherInfo }) {
  const {
    name,
    major,
    graduationYear,
    linkedinUrl,
    photo,
    hobbies,
    interests,
    askMeAbout,
    loveStatement,
  } = brotherInfo;

  const parseList = (items) => {
    return items.split(',').map((item, index) => (
      <li key={index} className="brother-list-item">{item.trim()}</li>
    ));
  };

  return (
    <div className="brother-container">
      <div className="brother-header">
        <img src={photo} alt={`${name}'s photo`} className="brother-photo" />
        <div className="brother-info">
          <h2 className="brother-name">{name}</h2>
          <p className="brother-major">Major: {major}</p>
          <p className="brother-graduation">Graduation Year: {graduationYear}</p>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="linkedin-button">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="brother-details">
        <div className="brother-section">
          <h3>Hobbies</h3>
          <ul className="brother-list">{parseList(hobbies)}</ul>
        </div>
        <div className="brother-section">
          <h3>Interests</h3>
          <ul className="brother-list">{parseList(interests)}</ul>
        </div>
        <div className="brother-section">
          <h3>Ask Me About</h3>
          <ul className="brother-list">{parseList(askMeAbout)}</ul>
        </div>
      </div>
      <div className="brother-love">
        <h3>Why I Love AKPsi</h3>
        <p>{loveStatement}</p>
      </div>
    </div>
  );
}
