import React from "react";
import { AnujTrollPhoto, ChrisTrollPhoto, JacobTrollPhoto } from "../Assets";
import "./NotFoundPage.css";

export default function NotFoundPage({ brotherSearch = false }) {
  const trollImages = [AnujTrollPhoto, ChrisTrollPhoto, JacobTrollPhoto];
  const randomImage =
    trollImages[Math.floor(Math.random() * trollImages.length)];

  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <div className="not-found-content">
          <img
            src={randomImage}
            alt="Funny troll face"
            className="not-found-image"
          />
          <h1 className="not-found-title">404</h1>
          <p className="not-found-message">
            {brotherSearch
              ? "Oops! Brother not found."
              : "Oops! Page not found."}
          </p>
          <p className="not-found-submessage">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="not-found-action">
          <a href="/" className="not-found-button">
            Go back to homepage
          </a>
        </div>
      </div>
    </div>
  );
}
