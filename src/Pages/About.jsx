import React, { useEffect } from "react";
import "./About.css";
import { motion } from "framer-motion";
import FAQ from "../Components/FAQ";
import {
  aboutImage1,
  aboutImage2,
  aboutImage3,
  aboutImage4,
  aboutImage5,
  aboutImage7,
} from "../Assets";
import { Instagram, Facebook } from "@mui/icons-material";
import { useMobile } from "../Components/Navbar";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const majorData = [
  { name: "Business", value: 38 },
  { name: "Engineering", value: 15 },
  { name: "Computer Science", value: 23 },
  { name: "Other", value: 24 },
];

const clubData = [
  { name: "Professional", value: 47 },
  { name: "Social", value: 18 },
  { name: "Academic", value: 27 },
  { name: "Other", value: 8 },
];

const placementData = [
  { year: "2019", oncampus: 65, beyondCampus: 80 },
  { year: "2020", oncampus: 70, beyondCampus: 85 },
  { year: "2021", oncampus: 75, beyondCampus: 88 },
  { year: "2022", oncampus: 78, beyondCampus: 90 },
  { year: "2023", oncampus: 80, beyondCampus: 92 },
];

const COLORS = ["#0066cc", "#00a86b", "#f39c12", "#8e44ad"];

export default function About() {
  const { isMobile } = useMobile();

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
      ".info-content, .info-image-container, .info-button-container, .wrapup-section, .summary-a-item, .final-statements, .social-links",
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="home-container">
      <div className="background-image">
        {!isMobile && <img src={aboutImage7} />}
        {isMobile && <img src={aboutImage7} />}
      </div>
      <motion.div className="hero-section">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ y: -130 }}
            animate={{ y: -150 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            About ΑΚΨ
          </motion.h1>
        </div>
      </motion.div>
      <div className="info-section">
        <h2>Chapter Demographics</h2>
        <div className="charts-grid">
          <div className="chart-container">
            <h3>Major Breakdown</h3>
            <ResponsiveContainer width="90%" height={500}>
              <PieChart>
                <Pie
                  data={majorData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={200}
                  fill="#8884d8"
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    percent,
                    name,
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const radius =
                      innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text
                        x={x}
                        y={y}
                        fill="white"
                        textAnchor="middle"
                        dominantBaseline="central"
                      >
                        <tspan x={x} dy="-0.5em">
                          {name}
                        </tspan>
                        <tspan
                          x={x}
                          dy="1.2em"
                        >{`${(percent * 100).toFixed(0)}%`}</tspan>
                      </text>
                    );
                  }}
                >
                  {majorData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-container">
            <h3>Club Involvement</h3>
            <ResponsiveContainer width="100%" height={500}>
              <PieChart>
                <Pie
                  data={clubData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={200}
                  fill="#8884d8"
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    percent,
                    name,
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const radius =
                      innerRadius + (outerRadius - innerRadius) * 0.5;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text
                        x={x}
                        y={y}
                        fill="white"
                        textAnchor="middle"
                        dominantBaseline="central"
                      >
                        <tspan x={x} dy="-0.5em">
                          {name}
                        </tspan>
                        <tspan
                          x={x}
                          dy="1.2em"
                        >{`${(percent * 100).toFixed(0)}%`}</tspan>
                      </text>
                    );
                  }}
                >
                  {clubData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-container">
            <h3>Leadership Involvement Rates</h3>
            <ResponsiveContainer width="100%" height={500}>
              <LineChart
                data={placementData}
                margin={{ top: 5, right: 30, left: 15, bottom: 5 }}
              >
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="oncampus"
                  stroke="#0066cc"
                  name="On-campus (%)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="beyondCampus"
                  stroke="#00a86b"
                  name="Campus and Beyond (%)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="wrapup-section">
        <h2>Our Core Values</h2>
        <div className="summary-section">
          <div className="summary-a-item">
            <h2>BROTHERHOOD</h2>
            <img src={aboutImage3} alt="Brotherhood" />
            <p>Foster lifelong connections</p>
          </div>
          <div className="summary-a-item">
            <h2>INTEGRITY</h2>
            <img src={aboutImage5} alt="Integrity" />
            <p>Uphold ethical standards</p>
          </div>
          <div className="summary-a-item">
            <h2>KNOWLEDGE</h2>
            <img src={aboutImage4} alt="Knowledge" />
            <p>Pursue continuous learning</p>
          </div>
          <div className="summary-a-item">
            <h2>SERVICE</h2>
            <img src={aboutImage1} alt="Service" />
            <p>Give back to the community</p>
          </div>
          <div className="summary-a-item">
            <h2>UNITY</h2>
            <img src={aboutImage2} alt="Unity" />
            <p>Strengthen through collaboration</p>
          </div>
        </div>
        <div className="info-section">
          <FAQ />
        </div>

        <footer className="site-footer">
          <div className="footer-content">
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
              <a href="mailto:akpsi.uci.rush@gmail.com">
                akpsi.uci.rush@gmail.com
              </a>
            </div>
            <div className="final-statements">
              <p className="statement-one">
                "Forging tomorrow's leaders through the crucible of brotherhood,
                integrity, and professional excellence."
              </p>
              <p className="statement-two">
                "From campus to boardroom, our impact resonates across
                industries and continents."
              </p>
              <p className="statement-three">
                Join us in writing the next chapter of business innovation and
                ethical leadership.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
