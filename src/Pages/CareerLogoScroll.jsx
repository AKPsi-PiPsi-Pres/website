import React from 'react';
import './CareerLogoScroll.css';
import { GoogleLogo, AppleLogo, DeloitteLogo, AdobeLogo, EYLogo,
    MicrosoftLogo, TiktokLogo, JPMorganLogo,WellsFargoLogo, TinderLogo,
    LinkedInLogo, kpmglogo, metalogo, capitalonelogo, BandCLogo,
    doordashlogo, bloomberglogo, fazelogo, hpLogo, intellogo, kialogo,
    nasalogo, nbclogo, oraclelogo, paramountLogo,
    protivitilogo, pwclogo, redbulllogo, statefarmlogo, vmwarelogo, 
    walmartlogo, warnbroslogo} from '../Assets';

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
        <img src={kpmglogo} />
        <img src={metalogo} />
        <img src={capitalonelogo} />
        <img src={BandCLogo} />
        <img src={doordashlogo} />
        <img src={bloomberglogo} />
        <img src={fazelogo} />
        <img src={hpLogo} />
        <img src={intellogo} />
        <img src={kialogo} />
        <img src={nasalogo} />
        <img src={nbclogo} />
        <img src={oraclelogo} />
        <img src={paramountLogo} />
        <img src={protivitilogo} />
        <img src={pwclogo} />
        <img src={redbulllogo} />
        <img src={statefarmlogo} />
        <img src={walmartlogo} />
        <img src={warnbroslogo} />

      </div>
    </div>
  );
};

export default LogoScroller;
