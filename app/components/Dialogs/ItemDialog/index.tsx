// index.tsx
import React, { useEffect, useState } from "react";
import "./styles.css";
import TabSection from "./TabSection";
import UpperSection from "./UpperSection";

interface ItemDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ItemDialog = ({ isOpen, onClose }: ItemDialogProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleMinimize = () => {
    console.log("minimize");
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
        // Start closing animation
        setIsClosing(true);
        // Wait for animation to finish before hiding
        setTimeout(() => {
          setIsVisible(false);
          setIsClosing(false);
        }, 300); // Match this with CSS transition duration
      } else {
        setIsVisible(true);
        setIsClosing(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isOpen || (!isVisible && !isClosing)) return null;

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
          <div className="radio-options" style={{ marginBottom: "8px" }}>
            <label className="radio-label">
              <input type="radio" name="itemType" />
              Unique
            </label>
            <label className="radio-label">
              <input type="radio" name="itemType" />
              Limited
            </label>
            <label className="radio-label">
              <input type="radio" name="itemType" value="open" defaultChecked />
              Open
            </label>
            <label className="radio-label">
              <input type="radio" name="itemType" />
              NonStock
            </label>
          </div>
          <TabSection />
          <div className="bottom-bar">
            <div className="sort-options">
              <span>Sort By:</span>
              <label className="radio-label">
                <input type="radio" name="sortBy" value="title" />
                Title
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="sortBy"
                  value="artist"
                  defaultChecked
                />
                Artist
              </label>
              <label className="radio-label">
                <input type="radio" name="sortBy" value="scancode" />
                Scancode
              </label>
              <label className="radio-label">
                <input type="radio" name="sortBy" value="type" />
                Type
              </label>

              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                Remember Filter
              </label>
            </div>

            <div className="status-bar">
              <button className="force-del-btn">Force Del</button>
              <span className="status-text">
                Lot 1 of 3 (Title), 1 of 3 (Items) (#14318)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDialog;
