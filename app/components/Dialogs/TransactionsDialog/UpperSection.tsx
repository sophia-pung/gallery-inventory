// UpperSection.tsx
import React from "react";

const UpperSection = () => {
  return (
    <div className="transaction-upper-section">
      {/* First row */}
      <div className="transaction-row">
        <div className="transaction-field">
          <label>Location</label>
          <select className="transaction-input">
            <option>Photography West Gallery</option>
          </select>
        </div>
        <div className="transaction-field">
          <label>Transact #</label>
          <input type="text" className="transaction-input" placeholder="7396" />
        </div>
        <div className="transaction-field">
          <label>Date</label>
          <input
            type="text"
            className="transaction-input"
            placeholder="01/17/2025 12:11:04 PM"
          />
        </div>
      </div>

      {/* Second row */}
      <div className="transaction-row">
        <div className="transaction-field">
          <label>Tax Type</label>
          <select className="transaction-input">
            <option>OUT OF STATE</option>
          </select>
        </div>
        <div className="transaction-field">
          <label>Client</label>
          <input
            type="text"
            className="transaction-input disabled-input"
            value="Daalmans, Jacco"
            readOnly
          />
        </div>
        <div className="transaction-field">
          <label>Type</label>
          <input
            type="text"
            className="transaction-input disabled-input"
            value="ReturnSale"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
