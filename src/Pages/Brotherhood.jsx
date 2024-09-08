import React, { useEffect, useRef } from "react";
import "./Brotherhood.css";
import { Fall23RushVideo, CruiseReel } from "../Assets";
import { useMobile } from "../Components/Navbar";
import DownPointerButton from "../Components/DownPointerButton";
import { motion } from "framer-motion";
import {
  BrotherhoodImage1,
  BrotherhoodImage2,
  BrotherhoodImage3,
  BrotherhoodImage4,
  BrotherhoodImage5,
  BrotherhoodImage6,
  BrotherhoodImage7,
  BrotherhoodImage8,
  BrotherhoodImage9,
  BrotherhoodImage10,
  BrotherhoodImage11,
  BrotherhoodImage12,
  BrotherhoodImage13,
  BrotherhoodImage14,
  BrotherhoodImage15,
  BrotherhoodImage16,
  BrotherhoodImage17,
  BrotherhoodImage18,
  BrotherhoodImage19,
  BrotherhoodImage20,
  BrotherhoodImage21,
  BrotherhoodImage22,
  BrotherhoodImage23,
  BrotherhoodImage24,
  BrotherhoodImage25,
  BrotherhoodImage26,
  BrotherhoodImage27,
  BrotherhoodImage28,
  BrotherhoodImage29,
  BrotherhoodImage30,
  BrotherhoodImage31,
  BrotherhoodImage32,
  BrotherhoodImage33,
  BrotherhoodImage35,
  BrotherhoodImage36,
  BrotherhoodImage37,
  BrotherhoodImage38,
  BrotherhoodImage39,
  BrotherhoodImage40,
  BrotherhoodImage41,
  BrotherhoodImage42,
  BrotherhoodImage43,
  BrotherhoodImage44,
  BrotherhoodImage45,
  BrotherhoodImage47,
  BrotherhoodImage48,
  BrotherhoodImage49,
  BrotherhoodImage50,
  BrotherhoodImage51,
  BrotherhoodImage52,
  BrotherhoodImage53,
  BrotherhoodImage54,
  BrotherhoodImage55,
  BrotherhoodImage56,
  BrotherhoodImage57,
  BrotherhoodImage58,
  BrotherhoodImage59,
  BrotherhoodImage60,
  BrotherhoodImage61,
  BrotherhoodImage62,
  BrotherhoodImage63,
} from "../Assets";

export default function Brotherhood() {
  const trackRef = useRef(null);
  const { isMobile, setIsMobile } = useMobile();
  //Make SURE every image you are using has a centered subject, or else it will look very awkward
  const carouselImages = [
    BrotherhoodImage13,
    BrotherhoodImage33,
    BrotherhoodImage5,
    BrotherhoodImage6,
    BrotherhoodImage17,
    BrotherhoodImage7,
    BrotherhoodImage8,
    BrotherhoodImage3,
    BrotherhoodImage22,
    BrotherhoodImage10,
    BrotherhoodImage11,
  ];

  const scrapbookImages = [
    BrotherhoodImage35,
    BrotherhoodImage33,
    BrotherhoodImage38,
    BrotherhoodImage39,
    BrotherhoodImage40,
    BrotherhoodImage60,
    BrotherhoodImage41,
    BrotherhoodImage42,
    BrotherhoodImage43,
    BrotherhoodImage62,
    BrotherhoodImage44,
    BrotherhoodImage45,
    BrotherhoodImage37,
    BrotherhoodImage47,
    BrotherhoodImage48,
    BrotherhoodImage57,
    BrotherhoodImage49,
    BrotherhoodImage50,
    BrotherhoodImage51,
    BrotherhoodImage30,
    BrotherhoodImage31,
    BrotherhoodImage32,
    BrotherhoodImage23,
    BrotherhoodImage36,
    BrotherhoodImage24,
    BrotherhoodImage25,
    BrotherhoodImage26,
    BrotherhoodImage27,
    BrotherhoodImage28,
    BrotherhoodImage18,
    BrotherhoodImage61,
    BrotherhoodImage19,
    BrotherhoodImage20,
    BrotherhoodImage21,
    BrotherhoodImage14,
    BrotherhoodImage15,
    BrotherhoodImage16,
    BrotherhoodImage9,
    BrotherhoodImage52,
    BrotherhoodImage53,
    BrotherhoodImage54,
    BrotherhoodImage55,
    BrotherhoodImage56,
    BrotherhoodImage59,
    BrotherhoodImage63,
  ];

  useEffect(() => {
    const track = trackRef.current;

    // Initialize the track's position
    track.dataset.percentage = 0;
    track.dataset.prevPercentage = 0;
    track.style.transform = "translate(0%, 0%)";

    const handleStart = (e) => {
      track.dataset.startAt = e.type.includes("mouse")
        ? e.clientX
        : e.touches[0].clientX;
    };

    const handleMove = (e) => {
      if (track.dataset.startAt === "0") return;

      const currentPosition = e.type.includes("mouse")
        ? e.clientX
        : e.touches[0].clientX;
      const startPosition = parseFloat(track.dataset.startAt);
      const mouseDelta = startPosition - currentPosition,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

      const boundedNextPercentage = Math.max(Math.min(nextPercentage, 0), -65);

      track.dataset.percentage = boundedNextPercentage;

      track.animate(
        {
          transform: `translate(${boundedNextPercentage}%, 0%)`,
        },
        { duration: 1200, fill: "forwards" },
      );

      for (const image of track.getElementsByClassName("img")) {
        image.animate(
          {
            objectPosition: `${100 + boundedNextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" },
        );
      }
    };

    const handleEnd = () => {
      track.dataset.startAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    // Mouse events
    window.addEventListener("mousedown", handleStart);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);

    // Touch events
    window.addEventListener("touchstart", handleStart);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleEnd);

    return () => {
      // Mouse events
      window.removeEventListener("mousedown", handleStart);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);

      // Touch events
      window.removeEventListener("touchstart", handleStart);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="video-section">
        <motion.div className="hero-section">
          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ y: -130, opacity: 1 }}
              animate={{ y: -150, opacity: 0 }}
              transition={{ delay: 41, duration: 2, ease: "easeOut" }}
            >
              Brotherhood
            </motion.h1>
          </div>
        </motion.div>
        <div className="background-video">
          {!isMobile && (
            <video src={Fall23RushVideo} autoPlay muted playsInline>
              Your browser does not support the video tag.
            </video>
          )}
          {isMobile && (
            <video src={CruiseReel} autoPlay muted playsInline>
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
      <div className="carousel-section">
        <p className="brotherhood-title">
          From quarterly retreats to spontaneous hangouts, our brothers in Alpha
          Kappa Psi always make lifelong memories.
        </p>
        <div className="carousel-body">
          <div
            className="image-track"
            ref={trackRef}
            id="image-track"
            data-mouse-down-at="0"
            data-prev-percentage="0"
          >
            {carouselImages.map((image, index) => (
              <img
                key={index}
                className="img"
                src={image}
                alt="Photo of AKY Brothers"
                draggable={false}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="photoframe-section">
        <p className="photoframe-title">The AKY Digital Scrapbook</p>
        <div className="photoframe-container">
          {scrapbookImages.map((image, index) => (
            <img
              key={index}
              className="img"
              src={image}
              alt="Photo of AKY Brothers"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
