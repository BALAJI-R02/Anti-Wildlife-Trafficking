import React, { useState } from "react";
import axios from "axios";

const FakeAdScanner = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/scan-darkweb");
      setAds(response.data.fake_ads_found);
    } catch (error) {
      console.error("Scan failed", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <button onClick={handleScan} className="scan-button">
        Scan Dark Web
      </button>
      {loading && <p>Scanning...</p>}
      <ul>
        {ads.map((ad, index) => (
          <li key={index}>{ad}</li>
        ))}
      </ul>
    </div>
  );
};

export default FakeAdScanner;
