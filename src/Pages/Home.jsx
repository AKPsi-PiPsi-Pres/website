import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Spring23RushVideo, JTreeReel, BrotherhoodImage2 } from "../Assets";
import { knightAKYLogo } from "../Assets";
import SleekButton from "../Components/SleekButton";
import { OpenInNew } from "@mui/icons-material";
import { useRef, useEffect, useState } from "react";
import { Instagram, Facebook } from "@mui/icons-material";
import { useMobile } from "../Components/Navbar";
import { PersonalGrowth, BrotherhoodImage53 } from "../Assets";
import DownPointerButton from "../Components/DownPointer";

export default function Home() {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const { isMobile, setIsMobile } = useMobile();

  // useEffect(() => {
  //   if (videoRef) {
  //     videoRef.volume = volume;
  //   }
  // }, [volume]);

  // const handleVolumeChange = (e) => {
  //   setVolume(parseFloat(e.target.value));
  //   console.log(volume);
  // };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const animateOnScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    const sections = document.querySelectorAll(
      ".info-content, .info-image-container, .info-button-container, .wrapup-section, .summary-item, .final-statements, .social-links"
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="home-container">
      <div className="background-video">
        {!isMobile && (
          <video src={Spring23RushVideo} autoPlay muted playsInline>
            Your browser does not support the video tag.
          </video>
        )}
        {isMobile && (
          <video src={JTreeReel} autoPlay muted playsInline>
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ y: -130, opacity: 0.3 }}
            animate={{ y: -150, opacity: 1 }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            ΑΚΨ - UCI
            {/* <div className="volume-control">
              <input
                type="range"
                min="-0.1"
                max="1.1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div> */}
          </motion.h1>
        </div>
      </motion.div>
      <div className="info-section">
        <div className="info-content">
          <h2>The world's oldest and largest business fraternity</h2>
          <p>
            The organization of Alpha Kappa Psi was founded in New York
            University in 1904. Now over a century old, Alpha Kappa Psi has
            helped over 300,000 individuals create lifelong friends and pursue
            their dreams. Our goal is to help Anteaters become the best versions
            of themselves that they can be.
          </p>
        </div>
        <div className="info-image-container">
          <img
            className="info-image"
            src={knightAKYLogo}
            alt="Knight Logo of Alpha Kappa Psi"
          />
        </div>
        <div className="info-button-container">
          <SleekButton
            variant="outlined"
            href="https://akpsi.org/"
            target="_blank"
            endIcon={<OpenInNew />}
            className="sleekButton"
          >
            Learn More
          </SleekButton>
        </div>
      </div>
      <div className="wrapup-section">
        <div className="summary-section">
          <div className="summary-item brotherhood">
            <h2>BROTHERHOOD</h2>
            <img src={BrotherhoodImage53} alt="Brotherhood" />
            <p>
              In Alpha Kappa Psi, you meet as strangers but leave as lifelong
              friends. Our brotherhood sets us apart and shapes us into who we
              are.
            </p>
            <SleekButton className="sleekButton" href="/meet-us">
              Our Brothers
            </SleekButton>
          </div>

          <div className="summary-item professionalism">
            <h2>PROFESSIONALISM</h2>
            <img src={BrotherhoodImage2} alt="Professionalism" />
            <p>
              We inspire one another to chase our passions with confidence by
              equipping ourselves with the tools necessary to succeed in any
              industry.
            </p>
            <SleekButton className="sleekButton" href="/careers">
              Our Careers
            </SleekButton>
          </div>

          <div className="summary-item personal-growth">
            <h2>PERSONAL GROWTH</h2>
            <img src={PersonalGrowth} alt="Personal Growth" />
            <p>
              Our unique culture inspires, encourages, and motivates you to step
              out of your comfort zone and live the life you've always imagined.
            </p>
            <SleekButton className="sleekButton" href="/recruitment">
              Recruitment
            </SleekButton>
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://www.instagram.com/akpsiuci"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://facebook.com/akpsiuci"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a href="mailto:akpsi.uci.rush@gmail.com">akpsi.uci.rush@gmail.com</a>
        </div>
        <div className="final-statements">
          <div className="statement-one">
            <p>
              Our members strive to uphold the highest standards in everything
              they do. 
            </p>
          </div>
          <div className="statement-two">
            <p>
              Site designed and developed in-house, on 2700 lines of code and
              counting...
            </p>
          </div>
        </div>
      </div>
      <DownPointerButton />
    </div>
  );
}
