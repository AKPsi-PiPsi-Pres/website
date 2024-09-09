import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './About.css';
import { earthJPG } from "../Assets";

const majorData = [
  { name: 'Business', value: 40 },
  { name: 'Engineering', value: 30 },
  { name: 'Computer Science', value: 20 },
  { name: 'Other', value: 10 },
];

const clubData = [
  { name: 'Professional', value: 45 },
  { name: 'Social', value: 30 },
  { name: 'Academic', value: 15 },
  { name: 'Other', value: 10 },
];

const placementData = [
  { name: 'Internships', rate: 75 },
  { name: 'Full-time Jobs', rate: 90 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function About() {
  return (
    <div className="aboutUsContainer" style={{ backgroundImage: `url(${earthJPG})` }}>
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
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            About ΑΚΨ
          </motion.h1>
          <motion.p
            className="aboutus-subtitle1"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            Shaping the Future of Business Leadership
          </motion.p>
        </div>
      </motion.div>

      <div className="mainTitleSection">
        <h1 className="mainTitle">What Is Alpha Kappa Psi?</h1>
      </div>
      
      <div className="aboutus-section">
        <div className="content-grid">
          <div>
            <h2>A Legacy of Excellence</h2>
            <p>
              The organization of Alpha Kappa Psi was founded at New York University in 1904. Now over a century old, Alpha Kappa Psi has helped over 300,000 individuals create lifelong friends and pursue their dreams. Our chapter here at UC Irvine is devoted to this same goal of helping students build lasting friendships and achieve their dreams.
            </p>
            <a href="#" className="learn-more">
              Learn about our history <ArrowRight className="arrow-icon" />
            </a>
          </div>
          <div className="content-image">
            <img src="/api/placeholder/600/400" alt="AKPsi History" />
          </div>
        </div>
        
        <div className="content-grid reverse">
          <div className="content-image">
            <img src="/api/placeholder/600/400" alt="UC Irvine Chapter" />
          </div>
          <div>
            <h2>UC Irvine Chapter</h2>
            <p>
              Our chapter at UC Irvine is committed to helping Anteaters become the best versions of themselves. We provide a supportive community where students can build lasting friendships, develop professional skills, and work towards achieving their dreams. Our goal is to help Anteaters become the best versions of themselves that they can be.
            </p>
            <a href="#" className="learn-more">
              Explore our chapter <ArrowRight className="arrow-icon" />
            </a>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <h2>Our Chapter at a Glance</h2>
          <div className="charts-grid">
            <div className="chart-container">
              <h3>Major Breakdown</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={majorData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {majorData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-container">
              <h3>Club Involvement</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={clubData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {clubData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-container">
              <h3>Placement Rates</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={placementData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="rate" fill="#8884d8" name="Placement Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Shape Your Future?</h2>
          <p>Join Alpha Kappa Psi and unlock your potential in business and leadership.</p>
          <button className="cta-button">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}