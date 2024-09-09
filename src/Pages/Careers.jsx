import React, { useState, useEffect } from "react";
import "./Careers.css";
import { motion } from "framer-motion";
import { alumni1 } from "../Assets";
import CareerTable from "./CareerTable";
import CareerLogoScroller from "./CareerLogoScroll";

export default function Careers() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = alumni1;
    img.onload = () => {
      setIsLoading(false);
    };
    // If the image fails to load, we still want to show the content
    img.onerror = () => {
      setIsLoading(false);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div
      className="careersContainer"
      style={{ backgroundImage: `url(${alumni1})` }}
    >
      <motion.div
        className="careerstitleSection"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-title" style={{"top": "-150px"}}>
            Careers
        </div>
      </motion.div>

      <div className="careersmainTitleSection">
        <h1 className="careersmainTitle">OUR PROFESSIONAL EXPERIENCE</h1>
      </div>
      <div className="careers-section">
        <CareerLogoScroller />
        <CareerTable />
      </div>
    </div>
  );
}