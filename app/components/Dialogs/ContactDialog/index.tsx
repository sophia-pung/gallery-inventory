import React, { useEffect, useState } from "react";
import { X, Minus, Square } from "lucide-react";
import TabSection from "./TabSection";
import UpperSection from "./UpperSection";
import "./contact-styles.css";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDialog = ({ isOpen, onClose }: ContactDialogProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const inventoryItems = [
    { label: "Contacts", count: "6117" },
    { label: "Artists", count: "135" },
    { label: "Vendors", count: "283" },
    { label: "Customers", count: "5889" },
    { label: "Locations", count: "1" },
    { label: "Galleries", count: "19" },
    { label: "Designers", count: "2" },
  ];

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

  if (!isOpen) return null;

  return (
    <div className={`overlay ${isClosing ? "closing" : ""}`}>
      <div className="border">
        <div className="header-section">
          <div className="title">
            <span>
              <img
                src="/mona_lisa.jpg"
                alt="mona lisa"
                className="header-icon"
              />
              Contacts
            </span>
          </div>
          <div className="control-buttons">
            <button
              className="control-button minimize"
              onClick={handleMinimize}
            >
              <Minus size={10} />
            </button>
            <button
              className="control-button maximize"
              onClick={handleMaximize}
            >
              <Square size={10} />
            </button>
            <button className="control-button close" onClick={handleClose}>
              <X size={10} />
            </button>
          </div>
        </div>

        <div className="content-section">
          <UpperSection />
          <TabSection />
        </div>

        <div className="bottom-bar">
          <div className="inventory-header">
            {inventoryItems.map((item, index) => (
              <div key={index} className="inventory-item">
                <span className="inventory-label"># {item.label}</span>
                <span className="inventory-count">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDialog;
