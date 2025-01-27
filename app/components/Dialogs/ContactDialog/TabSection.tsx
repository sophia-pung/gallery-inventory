import React, { useState } from "react";

const TabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Address/Phone");
  const tabs = [
    "Address/Phone",
    "Notes",
    "General",
    "Actions",
    "Transactions",
    "Payments",
    "Online",
  ];

  const renderAddressPhoneContent = () => (
    <div className="address-content">
      <div className="address-section">
        <div className="address-navigation">
          <button>⟪</button>
          <button>⟨</button>
          <button>⟩</button>
          <button>⟫</button>
          <span>Address 1 of 2</span>
          <button>Add Address</button>
          <button>Delete Address</button>
        </div>

        <div className="form-group">
          <label>Type</label>
          <select className="input-field">
            <option>Mailing</option>
          </select>
          <div className="checkbox">
            <input type="checkbox" id="mainAddress" defaultChecked />
            <label htmlFor="mainAddress">Main</label>
          </div>
        </div>

        <div className="form-group">
          <label>Address 1</label>
          <input
            type="text"
            className="input-field"
            defaultValue="16 Henke Court"
          />
        </div>

        <div className="form-group">
          <label>City / State</label>
          <input
            type="text"
            className="input-field"
            defaultValue="Woodcliff Lake"
          />
          <input
            type="text"
            className="input-field state-input"
            defaultValue="NJ"
          />
        </div>

        <div className="form-group">
          <label>Zip/Country</label>
          <input type="text" className="input-field" defaultValue="07677" />
          <input type="text" className="input-field" defaultValue="USA" />
        </div>
      </div>

      <div className="phone-section">
        <div className="phone-list">
          <div className="phone-header">
            <span>Phone Number</span>
            <span>Type</span>
            <span>Main</span>
            <div className="phone-buttons">
              <button>Add Phone</button>
              <button>Delete Phone</button>
            </div>
          </div>
          <div className="phone-entry">
            <input
              type="text"
              className="input-field"
              defaultValue="(917) 952-2519"
            />
            <select className="input-field">
              <option>Mailing</option>
            </select>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Address/Phone":
        return renderAddressPhoneContent();
      case "Notes":
        return (
          <div className="notes-content">
            <div className="notes-section">
              <h3>General Notes</h3>
              <textarea className="notes-area" rows={6} />
            </div>
          </div>
        );
      case "Transactions":
        return (
          <div className="transactions-grid">
            <table>
              <thead>
                <tr>
                  <th>Trans #</th>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Ed # Type</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return <div>Content for {activeTab} tab</div>;
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
