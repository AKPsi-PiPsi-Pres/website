import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { earthJPG } from "../Assets";

export default function Home() {
  return (
    <div
      className="aboutUsContainer"
      style={{ backgroundImage: `url(${earthJPG})` }}
    >
      <motion.div
        className="titleSection"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="aboutUsContent">
          <motion.h1
            className="aboutUsTitle"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 15.5, ease: "easeOut" }}
          >
            About ΑΚΨ
          </motion.h1>
          <motion.p
            className="aboutus-subtitle1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 16.5, ease: "easeOut", delay: 0.5 }}
          ></motion.p>
        </div>
      </motion.div>

      <div className="mainTitleSection">
        <h1 className="mainTitle">What Is Alpha Kappa Psi?</h1>
      </div>
      <div className="aboutus-section">
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
