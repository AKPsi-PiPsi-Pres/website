import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { earthJPG } from "../Assets";

export default function Home() {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${earthJPG})` }}
    >
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 15.5, ease: "easeOut" }}
          >
            ΑΚΨ
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 16.5, ease: "easeOut", delay: 0.5 }}
          >
            Pi Psi Chapter
          </motion.p>
        </div>
      </motion.div>
      <div className="info-section">
        <div>
          <h2>Test -- An Image or Video will probably go here</h2>
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
        <div>
          <h2>Test -- An Image or Video will probably go here</h2>
          <p>
            The organization of Alpha Kappa Psi was founded in New York
            University in 1904. Now over a century old, Alpha Kappa Psi has
            helped over 300,000 individuals create lifelong friends and pursue
            their dreams. why are u reading this omg u should be coding build
            lasting friendships and achieve their dreams. Our goal is to help
            Anteaters become the best versions of themselves that they can be.
          </p>
        </div>
      </div>
    </div>
  );
}