import React, { useEffect, useRef } from "react";
import "./Brotherhood.css";
import ImageGrid from "react-image-grid-animator";
import { Fall23RushVideo } from "../Assets";
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
  BrotherhoodImage34,
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
  BrotherhoodImage46,
  BrotherhoodImage47,
  BrotherhoodImage48,
  BrotherhoodImage49,
  BrotherhoodImage50,
  BrotherhoodImage51,
} from "../Assets";

export default function Brotherhood() {
  const trackRef = useRef(null);
  //Make SURE every image you are using has a centered subject, or else it will look very awkward
  const images = [
    BrotherhoodImage13,
    BrotherhoodImage22,
    BrotherhoodImage29,
    BrotherhoodImage34,
    BrotherhoodImage17,
    BrotherhoodImage5,
    BrotherhoodImage6,
    BrotherhoodImage7,
    BrotherhoodImage8,
    BrotherhoodImage3,
    BrotherhoodImage10,
    BrotherhoodImage11,
  ];

  useEffect(() => {
    const track = trackRef.current;

    // Initialize the track's position
    track.dataset.percentage = 0;
    track.dataset.prevPercentage = 0;
    track.style.transform = "translate(0%, 0%)";

    const handleMouseDown = (e) => {
      track.dataset.mouseDownAt = e.clientX;
    };

    const handleMouseMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

      const boundedNextPercentage = Math.max(Math.min(nextPercentage, 0), -61);

      track.dataset.percentage = boundedNextPercentage;

      track.animate(
        {
          transform: `translate(${boundedNextPercentage}%, 0%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("img")) {
        image.animate(
          {
            objectPosition: `${100 + boundedNextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    const handleMouseUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="video-section">
        <video src={Fall23RushVideo} autoPlay muted playsInline>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="carousel-section">
        <p className="brotherhood-title">From quarterly retreats to spontaneous hangouts, our brothers in Alpha Kappa Psi always make lifelong memories.</p>
        <div className="carousel-body">
          <div
            className="image-track"
            ref={trackRef}
            id="image-track"
            data-mouse-down-at="0"
            data-prev-percentage="0"
          >
            {images.map((image, index) => (
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
    </div>
  );
}
