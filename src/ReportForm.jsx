import React, { useState } from "react";

const ReportForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      alert("Please enter a valid report.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Report sent successfully!");
        setMessage("");
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error sending report:", error);
      alert("Failed to send report.");
    }
  };

  return (
    <div>
      <h2>Report Wildlife Trafficking</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe the issue..."
        rows="5"
      />
      <button onClick={handleSubmit}>Report Now</button>
    </div>
  );
};

export default ReportForm;
