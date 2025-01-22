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
          <div className="general-tab">
            <div className="top-section">
              <div className="PO-section">
                <div className="po-grid">
                  <div className="form-group">
                    <label>PO #</label>
                    <input
                      type="text"
                      defaultValue="14275"
                      className="input-field disabled-input"
                      disabled
                    />
                    <div className="checkbox-group">
                      <input type="checkbox" id="showCosts" />
                      <label className="show-costs" htmlFor="showCosts">
                        Show Costs
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>PO Location</label>
                    <input
                      type="text"
                      defaultValue="Photography West Gallery"
                      className="input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label>Owner</label>
                    <input
                      type="text"
                      defaultValue="Burkett, Christopher"
                      className="input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label>Stock Location</label>
                    <input
                      type="text"
                      defaultValue="Stock"
                      className="input-field stock-input"
                    />
                    <div className="consign-group">
                      <div>
                        <label className="consign-input-field">Consign</label>
                        <input
                          type="text"
                          defaultValue="Y"
                          className="input-field"
                        />
                      </div>
                      <input
                        type="text"
                        defaultValue="50.000"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="form-group combined-row-half">
                    <label>Art Cost Each</label>
                    <input
                      type="text"
                      defaultValue="50.00"
                      className="input-field"
                    />
                    <label className="qty-ord">Qty Ord</label>
                    <input
                      type="text"
                      defaultValue="1000"
                      className="input-field"
                    />
                  </div>

                  <div className="form-group combined-row-half">
                    <label>Art Price</label>
                    <input
                      type="text"
                      defaultValue="2500.00"
                      className="input-field"
                    />
                    <label className="po-cost">PO Cost</label>
                    <input
                      className="input-field disabled-input"
                      disabled
                      type="text"
                      defaultValue="50.00"
                    />
                  </div>
                  <div className="form-group" style={{ marginLeft: "84px" }}>
                    <input
                      type="text"
                      defaultValue="$0.00"
                      className="input-field disabled-input bottom-disabled"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="art-information">
                <div className="dimensions-grid">
                  <div className="form-group">
                    <label className="art-text">Art Height</label>
                    <input
                      type="text"
                      defaultValue="36.00"
                      className="input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="art-text">Art Width</label>
                    <input
                      type="text"
                      defaultValue="48.00"
                      className="input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="art-text">Frame/Mat Height</label>
                    <input
                      type="text"
                      defaultValue="0.00"
                      className="input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="art-text">Frame/Mat Width</label>
                    <input
                      type="text"
                      defaultValue="0.00"
                      className="input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label className="art-text">Lot Received</label>
                    <input
                      type="text"
                      defaultValue="8/27/2014 06:28:53 PM"
                      className="input-field disabled-input"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lower-section">
              <div className="form-group qty-hand-row">
                <label>Qty On Hand for Lot</label>
                <input
                  type="text"
                  defaultValue="996"
                  className="input-field disabled-input"
                  disabled
                />
                <label>Qty On Hand for Title</label>
                <input
                  type="text"
                  defaultValue="996"
                  className="input-field disabled-input"
                  disabled
                />
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
