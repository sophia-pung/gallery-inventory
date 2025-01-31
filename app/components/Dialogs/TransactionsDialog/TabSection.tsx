// TabSection.tsx
import React, { useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface ItemEntryData {
  scanCode: string;
  title: string;
  edType: string;
  edition: string;
  orig: string;
  qty: string;
  ret: string;
  priceNew: string;
  total: string;
}

interface PaymentData {
  dateDue: string;
  amountDue: string;
  payType: string;
  LI: string;
  amountPaid: string;
  datePaid: string;
  cardCheckNum: string;
  exp: string;
  cardName: string;
  authDL: string;
}

interface StaffData {
  staffName: string;
  percentOfSale: string;
  main: string;
}

const data: ItemEntryData[] = [
  {
    scanCode: "FCS-062519-01",
    title: "DELHI, INDIA (FLOCK",
    edType: "Unique",
    edition: "0",
    orig: "0",
    qty: "1",
    ret: "1",
    priceNew: "$1600.00",
    total: "$0.00",
  },
  {
    scanCode: "frame-misc",
    title: "ZFRAME MISC",
    edType: "NonStk",
    edition: "0",
    orig: "0",
    qty: "1",
    ret: "0",
    priceNew: "$200.00",
    total: "$0.00",
  },
  {
    scanCode: "fed-Ex",
    title: "SHIPPING (FEDEX)",
    edType: "NonStk",
    edition: "0",
    orig: "0",
    qty: "1",
    ret: "0",
    priceNew: "$100.00",
    total: "$0.00",
  },
  {
    scanCode: "",
    title: "",
    edType: "",
    edition: "",
    orig: "",
    qty: "",
    ret: "",
    priceNew: "",
    total: "",
  },
  {
    scanCode: "",
    title: "",
    edType: "",
    edition: "",
    orig: "",
    qty: "",
    ret: "",
    priceNew: "",
    total: "",
  },
  {
    scanCode: "",
    title: "",
    edType: "",
    edition: "",
    orig: "",
    qty: "",
    ret: "",
    priceNew: "",
    total: "",
  },
  {
    scanCode: "",
    title: "",
    edType: "",
    edition: "",
    orig: "",
    qty: "",
    ret: "",
    priceNew: "",
    total: "",
  },
  {
    scanCode: "",
    title: "",
    edType: "",
    edition: "",
    orig: "",
    qty: "",
    ret: "",
    priceNew: "",
    total: "",
  },
  {
    scanCode: "",
    title: "",
    edType: "",
    edition: "",
    orig: "",
    qty: "",
    ret: "",
    priceNew: "",
    total: "",
  },
];

const currentPayments: PaymentData[] = [
  {
    dateDue: "01/17/2025",
    amountDue: "$-1600.00",
    payType: "Credit",
    LI: "",
    amountPaid: "$-1600.00",
    datePaid: "01/17/2025 12:11:04",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
  {
    dateDue: "",
    amountDue: "",
    payType: "",
    LI: "",
    amountPaid: "",
    datePaid: "",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
  {
    dateDue: "",
    amountDue: "",
    payType: "",
    LI: "",
    amountPaid: "",
    datePaid: "",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
  {
    dateDue: "",
    amountDue: "",
    payType: "",
    LI: "",
    amountPaid: "",
    datePaid: "",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
  {
    dateDue: "",
    amountDue: "",
    payType: "",
    LI: "",
    amountPaid: "",
    datePaid: "",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
  {
    dateDue: "",
    amountDue: "",
    payType: "",
    LI: "",
    amountPaid: "",
    datePaid: "",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
];

const originalPayments: PaymentData[] = [
  {
    dateDue: "12/26/2024",
    amountDue: "$1900.00",
    payType: "Clover Int",
    LI: "",
    amountPaid: "$1900.00",
    datePaid: "12/26/2024 10:43:32",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
  {
    dateDue: "",
    amountDue: "",
    payType: "",
    LI: "",
    amountPaid: "",
    datePaid: "",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
  {
    dateDue: "",
    amountDue: "",
    payType: "",
    LI: "",
    amountPaid: "",
    datePaid: "",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
  {
    dateDue: "",
    amountDue: "",
    payType: "",
    LI: "",
    amountPaid: "",
    datePaid: "",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
  {
    dateDue: "",
    amountDue: "",
    payType: "",
    LI: "",
    amountPaid: "",
    datePaid: "",
    cardCheckNum: "",
    exp: "",
    cardName: "",
    authDL: "",
  },
];

const headers = [
  "ScanCode",
  "Title",
  "Ed Type",
  "Edition",
  "Orig",
  "Qty",
  "Ret",
  "Price New",
  "Total",
];

const paymentHeaders = [
  "Date Due",
  "Amount Due",
  "Pay Type",
  "L/I",
  "Amount Paid",
  "Date Paid",
  "Card/Check Num",
  "Exp",
  "Card Name",
  "Auth/D.L",
];

const staffData: StaffData[] = [
  {
    staffName: "Julia",
    percentOfSale: "100.000",
    main: "Y",
  },
  {
    staffName: "",
    percentOfSale: "",
    main: "",
  },
  {
    staffName: "",
    percentOfSale: "",
    main: "",
  },
  {
    staffName: "",
    percentOfSale: "",
    main: "",
  },
  {
    staffName: "",
    percentOfSale: "",
    main: "",
  },
  {
    staffName: "",
    percentOfSale: "",
    main: "",
  },
  {
    staffName: "",
    percentOfSale: "",
    main: "",
  },
  {
    staffName: "",
    percentOfSale: "",
    main: "",
  },
];

const staffHeaders = ["Staff User Name", "% of Sale", "Main?"];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("Item Entry");
  const tabs = ["Item Entry", "Client", "Payments", "Notes", "Staff"];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const renderContent = () => {
    switch (activeTab) {
      case "Item Entry":
        return (
          <div className="item-entry-content">
            <div className="item-entry-options">
              <div className="find-options">
                <label>Find:</label>
                <input type="radio" name="findType" id="findTitle" />
                <label htmlFor="findTitle">Title</label>
                <input
                  type="radio"
                  name="findType"
                  id="findItem"
                  defaultChecked
                />
                <label htmlFor="findItem">Item</label>

                <div className="item-button-row">
                  <button>Quick F3</button>
                  <button>Add Line F4</button>
                  <button>Delete Line</button>
                </div>
              </div>
            </div>

            <div className="item-table-wrapper">
              <div className="table-container">
                <table className="item-table">
                  <thead>
                    <tr>
                      {headers.map((header) => (
                        <th key={header} className="header">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        <td className="row-height">{row.scanCode}</td>
                        <td className="row-height">{row.title}</td>
                        <td className="row-height">{row.edType}</td>
                        <td className="row-height">{row.edition}</td>
                        <td className="row-height">{row.orig}</td>
                        <td className="row-height">{row.qty}</td>
                        <td className="row-height">{row.ret}</td>
                        <td className="row-height text-right">
                          {row.priceNew}
                        </td>
                        <td className="row-height text-right">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "Client":
        return (
          <div className="client-content">
            <div className="client-layout">
              <div className="client-left-column">
                {/* Client Search Section */}
                <div className="client-search">
                  <label>Look Up Client</label>
                  <input
                    type="text"
                    className="input-field"
                    defaultValue="Daalmans, Jacco"
                  />
                </div>

                {/* Name Fields */}
                <div className="client-details">
                  <div className="contact-form-group">
                    <label>Title/First/Last</label>
                    <div className="name-inputs">
                      <input type="text" className="input-field title-input" />
                      <input
                        type="text"
                        className="input-field first-input"
                        defaultValue="Jacco"
                      />
                      <input
                        type="text"
                        className="input-field last-input"
                        defaultValue="Daalmans"
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label>Spouse</label>
                    <input type="text" className="input-field" />
                  </div>

                  <div className="contact-form-group">
                    <label>Company</label>
                    <input type="text" className="input-field" />
                  </div>

                  <div className="contact-form-group">
                    <label>Email Address</label>
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="jadaalmans@hotmail.com"
                    />
                  </div>
                </div>
              </div>

              <div className="client-right-column">
                <div className="top-group">
                  <div className="tax-id-group">
                    <label>Tax ID</label>
                    <input type="text" className="input-field tax-input" />
                    <button className="action-button">New Client</button>
                  </div>
                </div>
                <div className="bottom-group">
                  <div className="expires-group">
                    <label>Expires</label>
                    <input type="text" className="input-field date-input" />
                    <span>/</span>
                    <input type="text" className="input-field date-input" />
                    <select className="input-field time-select">
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Sections */}
            <div className="addresses-container">
              {/* Mailing Address */}
              <div className="address-section">
                <div className="address-type">
                  <span>Mailing address type:</span>
                  <select className="input-field">
                    <option>Mailing</option>
                  </select>
                </div>

                <div className="contact-form-group">
                  <label>Address 1</label>
                  <input
                    type="text"
                    className="input-field"
                    defaultValue="Trocaderostraat 9"
                  />
                </div>

                <div className="contact-form-group">
                  <label>Address 2</label>
                  <input type="text" className="input-field" />
                </div>

                <div className="contact-form-group">
                  <label>Address 3</label>
                  <input type="text" className="input-field" />
                </div>

                <div className="contact-form-group">
                  <label>City/State</label>
                  <div className="city-state-inputs">
                    <input
                      type="text"
                      className="input-field city-input"
                      defaultValue="Maastricht"
                    />
                    <input
                      type="text"
                      className="input-field state-input"
                      defaultValue="NL"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label>Zip/Country</label>
                  <div className="zip-country-inputs">
                    <input
                      type="text"
                      className="input-field zip-input"
                      defaultValue="6213"
                    />
                    <input
                      type="text"
                      className="input-field country-input"
                      defaultValue="Netherlands"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label>Phone</label>
                  <div className="phone-input-group">
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="00316 231 843 30"
                    />
                    <button className="action-button">Ship to Here</button>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="address-section">
                <div className="address-type">
                  <span>Shipping address type:</span>
                  <select className="input-field">
                    <option>Shipping</option>
                  </select>
                </div>

                <div className="contact-form-group">
                  <label>Address 1</label>
                  <input
                    type="text"
                    className="input-field"
                    defaultValue="Stockholmstraat 52"
                  />
                </div>

                <div className="contact-form-group">
                  <label>Address 2</label>
                  <input type="text" className="input-field" />
                </div>

                <div className="contact-form-group">
                  <label>Address 3</label>
                  <input type="text" className="input-field" />
                </div>

                <div className="contact-form-group">
                  <label>City/State</label>
                  <div className="city-state-inputs">
                    <input
                      type="text"
                      className="input-field city-input"
                      defaultValue="Hengelo"
                    />
                    <input
                      type="text"
                      className="input-field state-input"
                      defaultValue="NL"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label>Zip/Country</label>
                  <div className="zip-country-inputs">
                    <input
                      type="text"
                      className="input-field zip-input"
                      defaultValue="7559"
                    />
                    <input
                      type="text"
                      className="input-field country-input"
                      defaultValue="Netherlands"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label>Phone</label>
                  <div className="phone-input-group">
                    <input
                      type="text"
                      className="input-field"
                      defaultValue="00316 231 843 30"
                    />
                    <button className="action-button">Ship to Here</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Payments":
        return (
          <div className="item-entry-content">
            {/* Paid in Full Section */}
            <div className="payment-header">
              <div className="paid-in-full">
                <label>Paid In Full</label>
                <input type="text" className="input-field date-input" />
                <span>/</span>
                <input type="text" className="input-field date-input" />
                <select className="input-field time-select">
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
              <div className="payment-actions">
                <button className="action-button">Add Payment</button>
                <button className="action-button">Delete Payment</button>
                <button className="action-button">Delete All</button>
                <button className="action-button">Apply Credit</button>
              </div>
            </div>

            {/* Current Payments Table */}
            <div className="payment-table-wrapper">
              <div className="table-container">
                <table className="payment-table">
                  <thead>
                    <tr>
                      {paymentHeaders.map((header) => (
                        <th key={header} className="header">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentPayments.map((row, index) => (
                      <tr key={index}>
                        <td className="row-height">{row.dateDue}</td>
                        <td className="row-height text-right">
                          {row.amountDue}
                        </td>
                        <td className="row-height">{row.payType}</td>
                        <td className="row-height">{row.LI}</td>
                        <td className="row-height text-right">
                          {row.amountPaid}
                        </td>
                        <td className="row-height">{row.datePaid}</td>
                        <td className="row-height">{row.cardCheckNum}</td>
                        <td className="row-height">{row.exp}</td>
                        <td className="row-height">{row.cardName}</td>
                        <td className="row-height">{row.authDL}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="payments-divider">
              <span>Payments from Original Sale:</span>
              <button className="action-button">Apply Canceled Payments</button>
            </div>

            {/* Original Sale Payments Table */}
            <div className="payment-table-wrapper">
              <div className="table-container">
                <table className="payment-table">
                  <thead>
                    <tr>
                      {paymentHeaders.map((header) => (
                        <th key={header} className="header">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {originalPayments.map((row, index) => (
                      <tr key={index}>
                        <td className="row-height">{row.dateDue}</td>
                        <td className="row-height text-right">
                          {row.amountDue}
                        </td>
                        <td className="row-height">{row.payType}</td>
                        <td className="row-height">{row.LI}</td>
                        <td className="row-height text-right">
                          {row.amountPaid}
                        </td>
                        <td className="row-height">{row.datePaid}</td>
                        <td className="row-height">{row.cardCheckNum}</td>
                        <td className="row-height">{row.exp}</td>
                        <td className="row-height">{row.cardName}</td>
                        <td className="row-height">{row.authDL}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case "Notes":
        return (
          <div className="notes-content">
            <div className="notes-layout">
              {/* Left side - Contact Notes */}
              <div className="contact-notes">
                <div className="notes-header">Contact Notes</div>
                <textarea className="contact-notes-textarea" rows={10} />
              </div>

              {/* Right side container */}
              <div className="right-notes-container">
                {/* Top right - Shipping Notes */}
                <div className="shipping-notes">
                  <div className="notes-header">Shipping Notes</div>
                  <textarea className="notes-textarea" rows={5} />
                </div>

                {/* Bottom right - Transaction Notes */}
                <div className="transaction-notes">
                  <div className="notes-header">Transaction Notes</div>
                  <textarea className="notes-textarea" rows={5} />
                </div>
              </div>
            </div>
          </div>
        );
      case "Staff":
        return (
          <div className="staff-content">
            <div className="staff-centered">
              <div className="staff-actions">
                <button className="action-button">Edit Staff</button>
                <button className="action-button">Add Staff</button>
                <button className="action-button">Delete Staff</button>
              </div>

              <div className="staff-table-wrapper">
                <div className="table-container">
                  <table className="staff-table">
                    <thead>
                      <tr>
                        {staffHeaders.map((header) => (
                          <th key={header} className="header">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {staffData.map((row, index) => (
                        <tr key={index}>
                          <td className="row-height">{row.staffName}</td>
                          <td className="row-height text-right">
                            {row.percentOfSale}
                          </td>
                          <td className="row-height">{row.main}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="scroll-controls">
                  <button className="scroll-button scroll-button-up">
                    <ChevronUp size={12} />
                  </button>
                  <button className="scroll-button scroll-button-down">
                    <ChevronDown size={12} />
                  </button>
                </div>
              </div>

              <div className="commission-date">
                <span>Date Commissions Paid In Full</span>
                <input type="text" className="input-field" disabled />
                <button className="action-button">Clear Date</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
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
