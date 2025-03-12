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
  WinterRetreatFraternity,
} from "../Assets";
import { Instagram, Facebook, LinkedIn } from "@mui/icons-material";
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
  { year: "2019", oncampus: 63, beyondCampus: 70 },
  { year: "2020", oncampus: 70, beyondCampus: 75 },
  { year: "2021", oncampus: 72, beyondCampus: 77 },
  { year: "2022", oncampus: 68, beyondCampus: 75 },
  { year: "2023", oncampus: 77, beyondCampus: 83 },
  { year: "2024", oncampus: 85, beyondCampus: 90 },
];

const COLORS = ["#0066cc", "#00a86b", "#f39c12", "#8e44ad"];

export default function About() {
  const { isMobile } = useMobile();
  
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  
  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

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
        {!isMobile && <img src={WinterRetreatFraternity} />}
        {isMobile && <img src={WinterRetreatFraternity} />}
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
      <div className="section-background info-background">
        <div className="section-overlay"></div>
        <div className="info-section">
          <h2 className="section-title">Chapter Demographics</h2>
          <div className="charts-grid">
            <motion.div 
              className="chart-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
            >
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
            </motion.div>
            <motion.div 
              className="chart-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              transition={{ delay: 0.1 }}
            >
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
            </motion.div>
            <motion.div 
              className="chart-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInVariants}
              transition={{ delay: 0.2 }}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
      <div className="pillar-background">
        <div className="pillar-overlay"></div>
        <div className="wrapup-section">
          <h2 className="pillar-title">Our Core Values</h2>
          <div className="summary-section">
            <motion.div 
              className="summary-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleInVariants}
              custom={0}
            >
              <div className="item-content">
                <h2>BROTHERHOOD</h2>
                <div className="image-container">
                  <img src={aboutImage3} alt="Brotherhood" />
                  <div className="image-overlay"></div>
                </div>
                <p>Foster lifelong connections</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="summary-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleInVariants}
              custom={1}
              transition={{ delay: 0.1 }}
            >
              <div className="item-content">
                <h2>INTEGRITY</h2>
                <div className="image-container">
                  <img src={aboutImage5} alt="Integrity" />
                  <div className="image-overlay"></div>
                </div>
                <p>Uphold ethical standards</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="summary-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleInVariants}
              custom={2}
              transition={{ delay: 0.2 }}
            >
              <div className="item-content">
                <h2>KNOWLEDGE</h2>
                <div className="image-container">
                  <img src={aboutImage4} alt="Knowledge" />
                  <div className="image-overlay"></div>
                </div>
                <p>Pursue continuous learning</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="summary-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleInVariants}
              custom={3}
              transition={{ delay: 0.3 }}
            >
              <div className="item-content">
                <h2>SERVICE</h2>
                <div className="image-container">
                  <img src={aboutImage1} alt="Service" />
                  <div className="image-overlay"></div>
                </div>
                <p>Give back to the community</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="summary-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleInVariants}
              custom={4}
              transition={{ delay: 0.4 }}
            >
              <div className="item-content">
                <h2>UNITY</h2>
                <div className="image-container">
                  <img src={aboutImage2} alt="Unity" />
                  <div className="image-overlay"></div>
                </div>
                <p>Strengthen through collaboration</p>
              </div>
            </motion.div>
          </div>
          
          <div className="section-background faq-background">
            <div className="section-overlay"></div>
            <div className="info-section faq-section">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
              >
                <FAQ />
              </motion.div>
            </div>
          </div>

          <footer className="site-footer">
            <div className="footer-content">
              <motion.div 
                className="social-links"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
              >
                <a
                  href="https://www.instagram.com/akpsiuci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Instagram />
                </a>
                <a
                  href="https://facebook.com/akpsiuci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.linkedin.com/company/alpha-kappa-psi-uci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <LinkedIn />
                </a>
                <a href="mailto:akpsi.uci.rush@gmail.com" className="email-link">
                  akpsi.uci.rush@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="final-statements"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
              >
                <p className="statement-one">
                  "Forging tomorrow's leaders through the crucible of brotherhood,
                  integrity, and professional excellence."
                </p>
                <p className="statement-two">
                  Join us in writing the next chapter of business innovation and
                  ethical leadership.
                </p>
              </motion.div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
