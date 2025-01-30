// index.tsx
import React, { useEffect, useState } from "react";
import { X, Minus, Square } from "lucide-react";
import UpperSection from "./UpperSection";
import TabSection from "./TabSection";
import "./transactions-styles.css";

interface TransactionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionDialog = ({ isOpen, onClose }: TransactionDialogProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 850 && isOpen) {
        setIsClosing(true);
        setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, 300);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  const handleMinimize = () => {
    console.log("minimize");
    setIsMinimized(true);
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev);
    setIsMinimized(false);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`overlay ${isClosing ? "closing" : ""}`}>
      <div
        className={`border ${isMaximized ? "maximized" : ""}`}
        style={{
          maxWidth: isMaximized ? "100%" : "800px",
          maxHeight: isMaximized ? "100%" : "auto",
        }}
      >
        <div className="header-section">
          <span>
            <img src="/mona_lisa.jpg" alt="mona lisa" className="header-icon" />
            Transactions
          </span>
          <div className="control-buttons">
            <button
              className="control-button minimize"
              onClick={handleMinimize}
            >
              ─
            </button>
            <button
              className="control-button maximize"
              onClick={handleMaximize}
            >
              {isMaximized ? "▂" : "□"}
            </button>
            <button className="control-button close" onClick={onClose}>
              ×
            </button>
          </div>
        </div>
        <div className="content-section">
          <UpperSection />
          <TabSection />
          <div className="transaction-bottom">
            <div className="info-sections">
              {/* Left column */}
              <div className="left-column">
                <div className="field-row">
                  <span>Staff</span>
                  <div className="disabled-input">Julia</div>
                </div>
                <div className="field-row">
                  <span>Orig #</span>
                  <div className="disabled-input">10330</div>
                </div>
                <div className="field-row">
                  <span># Renewals</span>
                  <div className="disabled-input"></div>
                </div>
              </div>

              {/* Middle column */}
              <div className="middle-column">
                <div className="field-row">
                  <span>NonTaxable Items</span>
                  <div className="disabled-input">$0.00</div>
                </div>
                <div className="field-row">
                  <span>Taxable Items</span>
                  <div className="disabled-input">$0.00</div>
                </div>
                <div className="field-row">
                  <span>Taxes</span>
                  <div className="disabled-input">$0.00</div>
                </div>
              </div>

              {/* Right totals */}
              <div className="right-column">
                <div className="field-row">
                  <span>Total</span>
                  <div className="disabled-input">$0.00</div>
                </div>
                <div className="field-row">
                  <span>Payments</span>
                  <div className="disabled-input">$0.00</div>
                </div>
                <div className="field-row">
                  <span>Balance</span>
                  <div className="disabled-input">$0.00</div>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="checkbox-column">
                <label>
                  <input type="checkbox" /> Receipt
                </label>
                <label>
                  <input type="checkbox" /> Ticket
                </label>
                <label>
                  <input type="checkbox" /> Shipping Page
                </label>
                <label>
                  <input type="checkbox" /> COA's
                </label>
                <label>
                  <input type="checkbox" /> Prompt
                </label>
              </div>
            </div>

            {/* Bottom actions and sort */}
            <div className="bottom-section">
              <div className="sort-section">
                <span>Sort By:</span>
                <label>
                  <input
                    type="radio"
                    name="sortBy"
                    value="transaction"
                    defaultChecked
                  />{" "}
                  Transaction
                </label>
                <label>
                  <input type="radio" name="sortBy" value="client" /> Client
                </label>
                <label>
                  <input type="radio" name="sortBy" value="date" /> Date
                </label>
              </div>
              <div className="transaction-botton-right">
                <div className="receipt-actions">
                  <select>
                    <option>RECEIPT</option>
                  </select>
                  <button>Print</button>
                  <button>Preview</button>
                  <button>Email</button>
                  <button>File</button>
                </div>
                <div className="transaction-number disabled-input">
                  # Transactions: 7396, for Client 1 (#10345)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDialog;
