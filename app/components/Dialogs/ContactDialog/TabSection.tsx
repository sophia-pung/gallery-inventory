import React, { useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface PhoneTableData {
  phoneNumber: string;
  type: string;
  main: string;
}

interface TransactionTableData {
  transNum: string;
  date: string;
  title: string;
  edType: string;
  itemPrice: string;
  qty: string;
  itemTotal: string;
  transTotal: string;
  paidInFull: string;
  transLoc: string;
}

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Address/Phone");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs = ["Address/Phone", "Notes", "Transactions"];

  const data: PhoneTableData[] = [
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

  const transactionData: TransactionTableData[] = [
    {
      transNum: "5012",
      date: "10/12/2015",
      title: "SHIPPING (FEDEX)",
      edType: "0 Sale",
      itemPrice: "50.00",
      qty: "1",
      itemTotal: "50.00",
      transTotal: "2250.00",
      paidInFull: "10/12/2015",
      transLoc: "Photography West G",
    },
    {
      transNum: "5012",
      date: "10/12/2015",
      title: "THIRTEEN RIPPLES",
      edType: "0 Sale",
      itemPrice: "600.00",
      qty: "1",
      itemTotal: "600.00",
      transTotal: "2250.00",
      paidInFull: "10/12/2015",
      transLoc: "Photography West G",
    },
    {
      transNum: "5012",
      date: "10/12/2015",
      title: "BLACK ROCKS, C",
      edType: "0 Sale",
      itemPrice: "1600.00",
      qty: "1",
      itemTotal: "1600.00",
      transTotal: "2250.00",
      paidInFull: "10/12/2015",
      transLoc: "Photography West G",
    },
    {
      transNum: "",
      date: "",
      title: "",
      edType: "",
      itemPrice: "",
      qty: "",
      itemTotal: "",
      transTotal: "",
      paidInFull: "",
      transLoc: "",
    },
    {
      transNum: "",
      date: "",
      title: "",
      edType: "",
      itemPrice: "",
      qty: "",
      itemTotal: "",
      transTotal: "",
      paidInFull: "",
      transLoc: "",
    },
    {
      transNum: "",
      date: "",
      title: "",
      edType: "",
      itemPrice: "",
      qty: "",
      itemTotal: "",
      transTotal: "",
      paidInFull: "",
      transLoc: "",
    },
    {
      transNum: "",
      date: "",
      title: "",
      edType: "",
      itemPrice: "",
      qty: "",
      itemTotal: "",
      transTotal: "",
      paidInFull: "",
      transLoc: "",
    },
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
          <div className="contact-notes-tab">
            <div className="info-section">
              <label className="notes-field-label">Source</label>
              <input type="text" className="notes-input-field" />

              <div className="date-fields">
                <label className="notes-field-label">Birth</label>
                <div className="date-input-group">
                  <input
                    type="text"
                    className="date-input"
                    maxLength={2}
                    placeholder="MM"
                  />
                  <span>/</span>
                  <input
                    type="text"
                    className="date-input"
                    maxLength={2}
                    placeholder="DD"
                  />
                  <span>/</span>
                  <input
                    type="text"
                    className="date-input year"
                    maxLength={4}
                    placeholder="YYYY"
                  />
                </div>
                <label className="notes-field-label">Death</label>
                <div className="date-input-group">
                  <input
                    type="text"
                    className="date-input"
                    maxLength={2}
                    placeholder="MM"
                  />
                  <span>/</span>
                  <input
                    type="text"
                    className="date-input"
                    maxLength={2}
                    placeholder="DD"
                  />
                  <span>/</span>
                  <input
                    type="text"
                    className="date-input year"
                    maxLength={4}
                    placeholder="YYYY"
                  />
                </div>
              </div>
            </div>

            <textarea className="notes-area" placeholder="General notes..." />

            <div className="prints-section">
              <div>
                <div className="notes-field-label">Prints for Sale</div>
                <textarea className="prints-box"></textarea>
              </div>
              <div>
                <div className="notes-field-label">Prints Wanted</div>
                <textarea className="prints-box"></textarea>
              </div>
            </div>
          </div>
        );

      case "Transactions":
        return (
          <div className="contacts-transactions-tab">
            <div className="contacts-transactions-header">
              <button className="new-sale-button">New Sale</button>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="transType" defaultChecked />
                  Customer
                </label>
                <label className="radio-label">
                  <input type="radio" name="transType" />
                  Artist
                </label>
                <label className="radio-label">
                  <input type="radio" name="transType" />
                  Vendor
                </label>
              </div>
            </div>

            <div className="contacts-transactions-grid">
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
                    <th>Paid In Full</th>
                    <th>Trans Loc</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.transNum}</td>
                      <td>{row.date}</td>
                      <td>{row.title}</td>
                      <td>{row.edType}</td>
                      <td className="money">{row.itemPrice}</td>
                      <td>{row.qty}</td>
                      <td className="money">{row.itemTotal}</td>
                      <td className="money">{row.transTotal}</td>
                      <td>{row.paidInFull}</td>
                      <td>{row.transLoc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
