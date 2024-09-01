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
        <img src={statefarmlogo} alt="Statefarm" />
        <img src={hpLogo} alt="HP" />
        <img src={bloomberglogo} alt="Bloomberg" />
        <img src={GoogleLogo} alt="Google" />
        <img src={AppleLogo} alt="Apple" />
        <img src={DeloitteLogo} alt="Deloitte" />
        <img src={AdobeLogo} alt="Adobe" />
        <img src={EYLogo} alt="EY" />
        <img src={MicrosoftLogo} alt="Microsoft" />
        <img src={TiktokLogo} alt="Tiktok" />
        <img src={JPMorganLogo} alt="JPMorgan" />
        <img src={WellsFargoLogo} alt="Wells Fargo" />
        <img src={TinderLogo} alt="Tinder" />
        <img src={vmwarelogo} alt="vmware" />
        <img src={LinkedInLogo} alt="LinkedIn" />
        <img src={kpmglogo} alt="KPMG" />
        <img src={metalogo} alt="Meta" />
        <img src={capitalonelogo} alt="Capital One" />
        <img src={BandCLogo} alt="Bain and Co" />
        <img src={doordashlogo} alt="Doordash" />
        <img src={fazelogo} alt="Faze" />
        <img src={intellogo} alt="Intel" />
        <img src={kialogo} alt="KIA" />
        <img src={walmartlogo} alt="Walmart" />
        <img src={nasalogo} alt="NASA" />
        <img src={nbclogo} alt="NBC" />
        <img src={oraclelogo} alt="Oracle" />
        <img src={paramountLogo} alt="Paramount" />
        <img src={protivitilogo} alt="Protiviti" />
        <img src={pwclogo} alt="PWC" />
        <img src={redbulllogo} alt="Redbull" />
        <img src={warnbroslogo} alt="Warner Bros" />
      </div>
    </div>
  );
};

export default LogoScroller;
