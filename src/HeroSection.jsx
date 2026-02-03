import React from "react";
import "./index.css";
import image from "./assets/image.jpg";

const HeroSection = () => {
    return (
      <div className="hero-section" style={{ backgroundImage: `url(${image})` }}>
        <h1>ANTI-WILDLIFE TRAFFICKING</h1>
        <p>Stop the illicit trade in wildlife.</p>
  
        <div className="card-container">
          {/* Report Suspicious Activities */}
          <div className="card">
            <h3>Report suspicious activities</h3>
            <p>Help authorities track down illegal wildlife trading activities.</p>
          </div>
  
          {/* Learn About Wildlife Trafficking */}
          <div className="card">
            <h3>Learn about wildlife trafficking</h3>
            <p>Understand the impact and ways to prevent wildlife trafficking.</p>
            <a 
              href="https://www.worldwildlife.org/threats/illegal-wildlife-trade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="learn-more-link"
            >
              Learn More
            </a>
          </div>
  
          {/* Explore Comprehensive Articles */}
          <div className="card">
            <h3>Explore comprehensive articles</h3>
            <p>Read expert opinions and case studies on wildlife conservation.</p>
          </div>
        </div>
  
        <button className="report-button">Report Now</button>
      </div>
    );
  };
  
  export default HeroSection;