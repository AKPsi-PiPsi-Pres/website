import React from "react";
import "./Careers.css";
import { motion } from "framer-motion";
import { alumni1 } from "../Assets";
import CareerTable from "./CareerTable";
import CareerLogoScroller from "./CareerLogoScroll";
import DownPointerButton from "../Components/DownPointerButton";

export default function Careers() {
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
        <div className="careersContent">
          <motion.h1
            className="hero-c-title"
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: -150, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Careers
          </motion.h1>
          <motion.p
            className="careers-subtitle1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
          ></motion.p>
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
