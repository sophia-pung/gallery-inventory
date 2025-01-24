// TabSection.tsx

import React, { useState } from "react";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("General");

  const tabs = ["General", "Locations", "Notes", "Transactions"];

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

      case "Locations":
        return (
          <div className="locations-tab">
            <div className="locations-header">
              <div className="checkbox-group location-checkboxes">
                <div className="checkbox">
                  <input type="checkbox" id="quickSale" />
                  <label htmlFor="quickSale">QuickSale</label>
                </div>
                <div className="checkbox">
                  <input type="checkbox" id="quickPO" />
                  <label htmlFor="quickPO">QuickPO</label>
                </div>
              </div>
              <span>Stock Location</span>
              <div className="sold-field">
                <input
                  type="text"
                  value="Sold"
                  className="input-field disabled-input"
                  disabled
                />
              </div>
            </div>

            <div className="locations-grid">
              <table>
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Qty</th>
                    <th>Staff</th>
                    <th>Date</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(8)].map((_, index) => (
                    <tr key={index}>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="locations-footer">
              <div className="date-info">
                <label>Date Added:</label>
                <input
                  type="text"
                  value="06/20/2023 12:00:00 AM"
                  className="input-field disabled-input date-input"
                  disabled
                />
                <label>Date Inventoried:</label>
                <input
                  type="text"
                  value="01/18/2025 03:44:16 PM"
                  className="input-field disabled-input date-input"
                  disabled
                />
              </div>
            </div>
            <div className="action-buttons">
              <button>Add</button>
              <button>Cancel</button>
              <button>Date</button>
            </div>
          </div>
        );

      case "Notes":
        return (
          <div className="notes-tab">
            <div className="notes-section">
              <h3>Description for this TITLE</h3>
              <textarea
                className="description-area"
                defaultValue="Lithograph printed by Dave Gardner, Dual Graphics and signed by the artist in 1988. Slight pinpoint impressions in mid right side"
              />
            </div>

            <div className="notes-section">
              <h3>Notes / Provenance for this ITEM</h3>
              <textarea
                className="notes-area"
                defaultValue={`PWG
                Limited Edition Lithograph
                PWG ORGINAL INV# GRBL.000296.00
                CONSIGNED: BARBARA RICHARDS (BROTHER DECEASED)
                PIECE BROUGHT BACK ON CONSIGNMENT 06/20/2023`}
              />
            </div>
          </div>
        );

      case "Transactions":
        return (
          <div className="transactions-tab">
            <div className="transactions-grid">
              <table>
                <thead>
                  <tr>
                    <th>PO #</th>
                    <th>Date</th>
                    <th>Client</th>
                    <th>Ed #</th>
                    <th>Type</th>
                    <th>Item Price</th>
                    <th>Qty</th>
                    <th>Item Total</th>
                    <th>Trans Total</th>
                    <th>Paid in Full</th>
                    <th>Trans Loc</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(8)].map((_, index) => (
                    <tr key={index}>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
