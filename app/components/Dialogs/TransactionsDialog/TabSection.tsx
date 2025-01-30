// TabSection.tsx
import React, { useRef, useState } from "react";

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
