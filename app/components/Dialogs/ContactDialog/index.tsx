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

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
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
            <button className="control-button minimize" onClick={() => {}}>
              <Minus size={10} />
            </button>
            <button className="control-button maximize" onClick={() => {}}>
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
          <div className="status">
            <span className="status-text">Records: 6117 of 6117</span>
          </div>
          <div className="sort-options">
            <span>Sort by:</span>
            <select className="sort-select">
              <option>Name</option>
              <option>Company</option>
              <option>City</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDialog;
