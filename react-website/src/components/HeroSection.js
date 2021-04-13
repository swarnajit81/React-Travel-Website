import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted></video>
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LETS GO!
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i class="fas fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
