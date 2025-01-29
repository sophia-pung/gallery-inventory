import React, { useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface TableData {
  phoneNumber: string;
  type: string;
  main: string;
}

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Address/Phone");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    "Address/Phone",
    "Notes",
    "General",
    "Actions",
    "Transactions",
    "Payments",
    "Online",
  ];

  const data: TableData[] = [
    { phoneNumber: "(917) 952-2519", type: "Mailing", main: "Y" },
    { phoneNumber: "", type: "", main: "" },
    { phoneNumber: "", type: "", main: "" },
    { phoneNumber: "", type: "", main: "" },
    { phoneNumber: "", type: "", main: "" },
    { phoneNumber: "", type: "", main: "" },
    { phoneNumber: "", type: "", main: "" },
    { phoneNumber: "", type: "", main: "" },
    { phoneNumber: "", type: "", main: "" },
  ];

  const headers = ["Phone Number", "Type", "Main?"];

  const handleScrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop -= 16; // One row height
    }
  };

  const handleScrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop += 16; // One row height
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Address/Phone":
        return (
          <div className="address-phone-content">
            <div className="address-section">
              <div className="address-navigation">
                <button>⟪</button>
                <button>⟨</button>
                <button>⟩</button>
                <button>⟫</button>
                <span className="input-field disabled-input">
                  Address 1 of 2
                </span>
                <button>Add Address</button>
                <button>Delete Address</button>
              </div>

              <div className="address-form">
                <div className="contact-form-group">
                  <label>Type</label>
                  <select className="input-field mailing">
                    <option>Mailing</option>
                  </select>
                  <div className="checkbox">
                    <input type="checkbox" id="mainAddress" defaultChecked />
                    <label htmlFor="mainAddress">Main</label>
                  </div>
                </div>

                <div className="contact-form-group address-1">
                  <label>Address 1</label>
                  <input
                    type="text"
                    className="input-field"
                    defaultValue="16 Henke Court"
                  />
                </div>

                <div className="contact-form-group address-3">
                  <label>Address 2</label>
                  <input type="text" className="input-field" />
                </div>

                <div className="contact-form-group address-3">
                  <label>Address 3</label>
                  <input type="text" className="input-field" />
                </div>

                <div className="contact-form-group">
                  <label>City / State</label>
                  <div className="city-state-inputs">
                    <input
                      type="text"
                      className="input-field city-input"
                      defaultValue="Woodcliff Lake"
                    />
                    <input
                      type="text"
                      className="input-field state-input"
                      defaultValue="NJ"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label>Zip/Country</label>
                  <div className="zip-country-inputs">
                    <input
                      type="text"
                      className="input-field zip-input"
                      defaultValue="07677"
                    />
                    <input
                      type="text"
                      className="input-field country-input"
                      defaultValue="USA"
                    />
                  </div>
                </div>
              </div>
              <div className="contact-button-row">
                <button>Clip Address</button>
                <button>Clip Address &amp; Phone</button>
              </div>
            </div>
            <div className="contact-phone">
              <div className="phone-buttons">
                <button>Add Phone</button>
                <button>Delete Phone</button>
              </div>
              <div className="phone-table-wrapper">
                <div className="table-container">
                  <table className="phone-table">
                    <thead>
                      <tr>
                        {headers.map((header) => (
                          <th key={header} className="header">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  </table>
                  <div
                    className="table-scroll-container"
                    ref={scrollContainerRef}
                  >
                    <table className="phone-table">
                      <tbody>
                        {data.map((row, index) => (
                          <tr key={index}>
                            <td className="row-height">{row.phoneNumber}</td>
                            <td className="row-height">{row.type}</td>
                            <td className="row-height">{row.main}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="scroll-controls">
                  <button
                    onClick={handleScrollUp}
                    className="scroll-button scroll-button-up"
                  >
                    <ChevronUp size={12} />
                  </button>
                  <button
                    onClick={handleScrollDown}
                    className="scroll-button scroll-button-down"
                  >
                    <ChevronDown size={12} />
                  </button>
                </div>
              </div>
              <div className="contact-button-row">
                <button>Clip Phone</button>
              </div>
            </div>
          </div>
        );

      case "Notes":
        return (
          <div className="notes-tab">
            <div className="notes-section">
              <h3>General Notes</h3>
              <textarea className="notes-area" rows={6} />
            </div>
          </div>
        );

      case "General":
        return (
          <div className="general-tab">
            <div className="general-content">
              <h3>General Information</h3>
              {/* Add general tab content */}
            </div>
          </div>
        );

      case "Transactions":
        return (
          <div className="contact-transactions-tab">
            <div className="contact-transactions-grid">
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
          </div>
        );

      case "Payments":
        return (
          <div className="payments-tab">
            <div className="payments-content">
              {/* Add payments tab content */}
            </div>
          </div>
        );

      case "Online":
        return (
          <div className="online-tab">
            <div className="online-content">{/* Add online tab content */}</div>
          </div>
        );

      default:
        return <div>Content for {activeTab}</div>;
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
