import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Spring23RushVideo } from "../Assets";
export default function Home() {
  return (
    <div
      className="home-container"
    >
      <div className="background-video">
        <video src={Spring23RushVideo} autoPlay muted playsInline>
        Your browser does not support the video tag.
        </video>
      </div>
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 10 }}
      >
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: -70, opacity: 1 }}
            transition={{ duration: 5.5, ease: "easeOut" }}
          >
            ΑΚΨ - UCI
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
            their dreams. Our chapter here at UC Irvine is devoted to this same
            goal of helping students build lasting friendships and achieve their
            dreams. Our goal is to help Anteaters become the best versions of
            themselves that they can be.
          </p>
        </div>
      </div>
    </div>
  );
}
