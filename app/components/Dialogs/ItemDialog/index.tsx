// index.tsx
import React, { useState } from "react";
import "./styles.css";
import TabSection from "./TabSection";
import UpperSection from "./UpperSection";

// prettier-ignore
const ItemDialog = ({  isOpen, onClose }: {  isOpen: boolean; onClose: () => void }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    console.log("minimize")
    setIsMinimized(true);
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev);
    setIsMinimized(false);
  };
  
  return (
    // prettier-ignore
    <div className={`overlay ${isMinimized ? "minimized" : ""}`} style={{ display: isOpen ? "flex" : "none" }}>
      <div
        className={`border ${isMaximized ? "maximized" : ""}`}
        style={{
          maxWidth: isMaximized ? "100%" : "800px",
          maxHeight: isMaximized ? "100%" : "auto",
        }}
      >
        <div className="header-section">
          <span>
            <img
              src="/mona_lisa.jpg"
              alt="mona lisa"
              className="header-icon"
            />
            Items
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
        </div>
      </div>
    </div>
  );
};

export default ItemDialog;
