// TabSection.tsx

import React, { useState } from "react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("General");

  const tabs = [
    "General",
    "Costs",
    "Locations",
    "Notes",
    "Editions",
    "Transactions",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "General":
        return (
          <div>
            <p>This is the General tab content.</p>
            <p>
              Welcome to the gallery management system! Here is some sample
              content.
            </p>
            <ul className="content-list">
              <li>Manage inventory</li>
              <li>Track transactions</li>
              <li>Explore new features</li>
            </ul>
          </div>
        );
      case "Costs":
        return (
          <div className="costs-container">
            <div className="costs-section">
              <div className="costs-grid">
                <div className="costs-field">
                  <label>PO #</label>
                  <input type="text" defaultValue="14275" />
                </div>
                <div className="costs-field">
                  <label>Art Cost Each</label>
                  <input type="text" defaultValue="$0.00" />
                </div>
                <div className="costs-field">
                  <label>Art Price</label>
                  <input type="text" defaultValue="$2500.00" />
                </div>
              </div>
            </div>
            <div className="costs-section">
              <div className="costs-grid">
                <div className="costs-field">
                  <label>Art Height</label>
                  <input type="text" defaultValue="36.00" />
                </div>
                <div className="costs-field">
                  <label>Art Width</label>
                  <input type="text" defaultValue="48.00" />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <p>Content for {activeTab} tab</p>;
    }
  };

  return (
    <div className="tab-section">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default TabSection;
