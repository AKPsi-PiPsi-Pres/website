import React from "react";
import "./Careers.css";
import { motion } from "framer-motion";
import { earthJPG } from "../Assets";
import TableInfo from './CareerTable';

export default function Home() {
  return (
    <div
      className="careersContainer"
      style={{ backgroundImage: `url(${earthJPG})` }}
    >

      <motion.div
        className="careerstitleSection"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="careersContent">
          <motion.h1
            className="careersTitle"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 15.5, ease: "easeOut" }}
          >
            Careers
          </motion.h1>
          <motion.p
            className="careers-subtitle1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 16.5, ease: "easeOut", delay: 0.5 }}
          >
            
          </motion.p>
        </div>
      </motion.div>

      <div className="careersmainTitleSection">
        <h1 className="careersmainTitle">Where have we worked?</h1>
      </div>
      <div className="careers-section">
        <div>

        <TableInfo />
        <div>
        </div>
        </div>
      </div>
    </div>
  );
}
