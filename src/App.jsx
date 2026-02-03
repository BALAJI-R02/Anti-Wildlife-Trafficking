import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Articles from "./pages/Articles";
import ReportForm from "./ReportForm";
import backgroundImage from "./assets/image.jpg";
import ReportModal from "./ReportModal"; // Modal component
import "./index.css";

const App = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [reportMessage, setReportMessage] = useState("");

  const handleReportClick = () => {
    setShowModal(true);
  };

  const handleSendReport = () => {
    if (reportMessage.trim()) {
      // Simulate sending to government office
      alert("Your report has been sent to the concerned government authority.");
      console.log("Sent message:", reportMessage);
      setShowModal(false);
      setReportMessage("");
    } else {
      alert("Please enter a message before sending.");
    }
  };

  return (
    <>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1>ANTI-WILDLIFE TRAFFICKING</h1>
        <p>Stop the illicit trade in wildlife</p>

        <div className="card-container">
          {/* Report Trafficking */}
          <div className="card" onClick={handleReportClick} style={{ cursor: "pointer" }}>
            <h3>Report Trafficking</h3>
            <p>Report suspicious activities</p>
          </div>

          {/* Educational Resources */}
          <div className="card">
            <h3>Educational Resources</h3>
            <p>
              <a
                href="https://www.wildlifejustice.org/wildlife-crime/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn about wildlife trafficking
              </a>
            </p>
          </div>

          {/* Learn More Articles */}
          <div className="card">
            <h3>Learn More</h3>
            <p><strong>Explore comprehensive articles</strong></p>
            <ul style={{ fontSize: "13px", marginTop: "8px", paddingLeft: "16px", color: "#333" }}>
              <li>How wildlife trafficking affects ecosystems</li>
              <li>The role of global organizations</li>
              <li>Steps to prevent illegal trade</li>
            </ul>
            <p style={{ marginTop: "10px" }}>
              <a
                href="https://www.nationalgeographic.com/animals/article/wildlife-watch"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#17692e", textDecoration: "underline", fontWeight: "bold" }}
              >
                Read Full Articles →
              </a>
            </p>
          </div>
        </div>

        <button className="report-button" onClick={handleReportClick}>
          Report Now
        </button>
      </div>

      {/* Modal Component */}
      {showModal && (
        <ReportModal
          message={reportMessage}
          setMessage={setReportMessage}
          onClose={() => setShowModal(false)}
          onSubmit={handleSendReport}
        />
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/report" element={<ReportForm />} />
      </Routes>
    </>
  );
};

export default App;
