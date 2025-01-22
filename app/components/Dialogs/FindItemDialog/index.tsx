import React, { useState } from "react";
import "./styles.css";
import FindItemGrid from "./FindItemGrid";

interface FindItemDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const FindItemDialog = ({ isOpen, onClose }: FindItemDialogProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleMinimize = () => {
    setIsMinimized(true);
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    setIsMaximized((prev) => !prev);
    setIsMinimized(false);
  };

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
            <img src="/mona_lisa.jpg" alt="mona lisa" className="header-icon" />
            Find Item
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
          <div className="button-row">
            <button>Select</button>
            <button>Reset</button>
            <button>Cancel</button>
            <button>Top</button>
            <button>Bottom</button>
          </div>
          <div className="search-criteria">
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="input-field" />
              <label>Artist</label>
              <input type="text" className="input-field" />
            </div>
            <div className="form-group">
              <label>Inv#</label>
              <input type="text" className="input-field" />
            </div>
          </div>
          <FindItemGrid />
          <div className="filter-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              Remember Filter
            </label>
            <div className="status-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                Consigned
              </label>
              <label className="checkbox-label">
                <input type="checkbox" />
                UnSold
              </label>
              <label className="checkbox-label">
                <input type="checkbox" />
                All Items
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindItemDialog;
