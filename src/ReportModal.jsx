import React from "react";

const ReportModal = ({ message, setMessage, onClose, onSubmit }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Report Suspicious Activity</h2>
        <textarea
          placeholder="Describe what you witnessed..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={onSubmit}>Report Now</button>
      </div>
    </div>
  );
};

export default ReportModal;
