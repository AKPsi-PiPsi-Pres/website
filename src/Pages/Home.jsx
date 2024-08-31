import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Spring23RushVideo } from "../Assets";
import { knightAKYLogo } from "../Assets";
import { Button } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import { useRef, useEffect, useState } from "react";
import { Instagram, Facebook, ArrowDropDown } from "@mui/icons-material";

export default function Home() {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(0.5);

  // useEffect(() => {
  //   if (videoRef) {
  //     videoRef.volume = volume;
  //   }
  // }, [volume]);

  // const handleVolumeChange = (e) => {
  //   setVolume(parseFloat(e.target.value));
  //   console.log(volume);
  // };

  return (
    <div className="home-container">
      <div className="background-video">
        <video src={Spring23RushVideo} autoPlay muted playsInline>
          Your browser does not support the video tag.
        </video>
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
            initial={{ y: -82, opacity: 0, scale: 0.9 }}
            animate={{ y: -80, opacity: 1, scale: 1.0 }}
            transition={{ duration: 4.5, ease: "easeOut" }}
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
        <div>
          <h2>The world’s oldest and largest business fraternity</h2>
          <p>
            The organization of Alpha Kappa Psi was founded in New York
            University in 1904. Now over a century old, Alpha Kappa Psi has
            helped over 300,000 individuals create lifelong friends and pursue
            their dreams. Our goal is to help Anteaters become the best versions
            of themselves that they can be.
          </p>
        </div>
        <div>
          <img
            className="info-image"
            src={knightAKYLogo}
            alt="Knight Logo of Alpha Kappa Psi"
          />
        </div>
        <div>
          <Button
            variant="outlined"
            href="https://akpsi.org/"
            target="_blank"
            endIcon={<OpenInNew />}
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="wrapup-section">
        <div className="final-statements">
          <div className="statement-one">
            <p>
              Our members strive to uphold the highest standards in everything
              they do
            </p>
          </div>
          <div className="statement-two">
            <p>
              Site designed and developed in-house, on 1600 lines of code and
              counting...
            </p>
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
      </div>
    </div>
  );
}
