import React, { useRef, useEffect, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Spring23RushVideo, JTreeReel, BrotherhoodImage2 } from "../Assets";
import { knightAKYLogo } from "../Assets";
import SleekButton from "../Components/SleekButton";
import { OpenInNew } from "@mui/icons-material";
import { Instagram, Facebook } from "@mui/icons-material";
import { useMobile } from "../Components/Navbar";
import { PersonalGrowth, BrotherhoodImage53 } from "../Assets";

export default function Home() {
  const { isMobile } = useMobile();
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    const handleCanPlay = () => {
      clearTimeout(timer);
      setIsLoading(false);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("canplay", handleCanPlay);
    }

    return () => {
      clearTimeout(timer);
      if (videoRef.current) {
        videoRef.current.removeEventListener("canplay", handleCanPlay);
      }
    };
  }, []);

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
      ".info-content, .info-image-container, .info-button-container, .wrapup-section, .summary-item, .final-statements, .social-links",
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <div className={`home-container ${isLoading ? "hidden" : ""}`}>
        <div className="background-video">
          {!isMobile && (
            <video
              ref={videoRef}
              src={Spring23RushVideo}
              autoPlay
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          )}
          {isMobile && (
            <video ref={videoRef} src={JTreeReel} autoPlay muted playsInline>
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <motion.div className="hero-section">
          <div className="hero-content">
            <motion.h1 className="hero-title" initial={{ y: -150 }}>
              ΑΚΨ - UCI
            </motion.h1>
          </div>
        </motion.div>
        <div className="info-section">
          <div className="info-content">
            <h2>The world's oldest and largest business fraternity</h2>
            <p>
              The organization of Alpha Kappa Psi was founded in New York
              University in 1904. Spanning decades, Alpha Kappa Psi has helped
              over 300,000 individuals create lifelong friends and pursue their
              dreams. Our goal is to help Anteaters become the best versions of
              themselves.
            </p>
          </div>
          <div className="info-image-container">
            <img
              className="info-image"
              src={knightAKYLogo}
              alt="Knight Logo of Alpha Kappa Psi"
            />
          </div>
          <div className="info-button-container">
            <SleekButton
              variant="outlined"
              href="https://akpsi.org/"
              target="_blank"
              endIcon={<OpenInNew />}
              className="sleekButton"
            >
              Learn More
            </SleekButton>
          </div>
        </div>
        <div className="wrapup-section">
          <div className="summary-section">
            <div className="summary-item brotherhood">
              <h2>BROTHERHOOD</h2>
              <img src={BrotherhoodImage53} alt="Brotherhood" />
              <p>
                In Alpha Kappa Psi, you meet as strangers but leave as lifelong
                friends. Our brotherhood sets us apart and shapes us into who we
                are.
              </p>
              <SleekButton className="sleekButton" href="/meet-us">
                Our Brothers
              </SleekButton>
            </div>

            <div className="summary-item professionalism">
              <h2>PROFESSIONALISM</h2>
              <img src={BrotherhoodImage2} alt="Professionalism" />
              <p>
                We inspire one another to chase our passions with confidence by
                equipping ourselves with the tools necessary to succeed in any
                industry.
              </p>
              <SleekButton className="sleekButton" href="/careers">
                Our Careers
              </SleekButton>
            </div>

            <div className="summary-item personal-growth">
              <h2>PERSONAL GROWTH</h2>
              <img src={PersonalGrowth} alt="Personal Growth" />
              <p>
                Our unique culture inspires, encourages, and motivates you to
                step out of your comfort zone and live the life you've always
                imagined.
              </p>
              <SleekButton className="sleekButton" href="/recruitment">
                Recruitment
              </SleekButton>
            </div>
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
                  Our members strive to uphold the highest standards in
                  everything they do.
                </p>
                <p className="statement-two">
                  Site designed and developed in-house, on 5000 lines of code
                  and counting...
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
