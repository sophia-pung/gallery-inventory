// index.tsx
import React, { useEffect, useState } from "react";
import "./styles.css";
import TabSection from "./TabSection";
import UpperSection from "./UpperSection";

// prettier-ignore
const ItemDialog = ({  isOpen, onClose }: {  isOpen: boolean; onClose: () => void }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleMinimize = () => {
    console.log("minimize")
    setIsMinimized(true);
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev);
    setIsMinimized(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 850) {
        setIsVisible(false);
      } else {
        setIsVisible(true);  // Add this to restore visibility when window is big enough
      }
    };
  
    // Initial check
    handleResize();
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible || !isOpen) return null;
  
  return (
    <div className={`overlay ${isMinimized ? "minimized" : ""}`}>
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
