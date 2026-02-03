import React, { useEffect, useState } from "react";

const FakeAds = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/fake-ads")
      .then((res) => res.json())
      .then((data) => setAds(data))
      .catch((err) => console.error("Error fetching ads:", err));
  }, []);

  return (
    <div>
      <h2>Identified Fake Ads</h2>
      {ads.map((ad, index) => (
        <div key={index} className="ad-card">
          <h3>{ad.title}</h3>
          <p>{ad.description}</p>
          <small>Source: {ad.source}</small>
        </div>
      ))}
    </div>
  );
};

export default FakeAds;
