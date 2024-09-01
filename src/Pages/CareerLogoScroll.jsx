import React from 'react';
import './CareerLogoScroll.css';
import { GoogleLogo, AppleLogo, DeloitteLogo, AdobeLogo, EYLogo,
    MicrosoftLogo, TiktokLogo, JPMorganLogo,WellsFargoLogo, TinderLogo,
    LinkedInLogo } from '../Assets';

const LogoScroller = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <img src={GoogleLogo} />
        <img src={AppleLogo} />
        <img src={DeloitteLogo} />
        <img src={AdobeLogo} />
        <img src={EYLogo} />
        <img src={MicrosoftLogo} />
        <img src={TiktokLogo} />
        <img src={JPMorganLogo} />
        <img src={WellsFargoLogo} />
        <img src={TinderLogo} />
        <img src={LinkedInLogo} />

      </div>
    </div>
  );
};

export default LogoScroller;
