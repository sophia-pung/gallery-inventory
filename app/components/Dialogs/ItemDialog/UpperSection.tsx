// UpperSection.tsx

import React, { useState, useEffect } from "react";

const UpperSection = () => {
  const [selectedPic, setSelectedPic] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          if (selectedPic < 6) {
            setSelectedPic((prev) => prev + 1);
          } else if (selectedPic >= 7 && selectedPic < 12) {
            setSelectedPic((prev) => prev + 1);
          }
          break;
        case "ArrowUp":
          if (selectedPic > 1 && selectedPic <= 6) {
            setSelectedPic((prev) => prev - 1);
          } else if (selectedPic > 7 && selectedPic <= 12) {
            setSelectedPic((prev) => prev - 1);
          }
          break;
        case "ArrowRight":
          if (selectedPic <= 6) {
            setSelectedPic((prev) => prev + 6);
          }
          break;
        case "ArrowLeft":
          if (selectedPic > 6) {
            setSelectedPic((prev) => prev - 6);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPic]);

  return (
    <div className="upper-section">
      <div className="form-section">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className="input-field" />
        </div>

        <div className="form-group">
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            id="artist"
            className="input-field"
            defaultValue="Burkett, Christopher"
          />
        </div>

        <div className="form-group combined-row-half">
          <label htmlFor="medium">Medium</label>
          <select id="medium" className="input-field">
            <option>None</option>
          </select>
          <label htmlFor="category">Category</label>
          <input type="text" id="category" className="input-field" />
        </div>

        <div className="form-group combined-row-thirds">
          <label htmlFor="inv">Inv#</label>
          <input
            type="text"
            id="inv"
            className="input-field"
            defaultValue="BURKEC002542"
          />
          <label htmlFor="edition">Edition #</label>
          <input
            type="text"
            id="edition"
            className="input-field"
            defaultValue="SPM"
          />
          <label htmlFor="circa">Circa</label>
          <input type="text" id="circa" className="input-field" />
        </div>

        <div className="form-group">
          <label htmlFor="picture1">Picture 1</label>
          <input type="text" id="picture1" className="input-field" />
        </div>

        <div className="form-group">
          <label htmlFor="printDate">Print Date</label>
          <input type="text" id="printDate" className="input-field" />
        </div>

        <div className="form-group">
          <label htmlFor="lengthCon">Length Con</label>
          <input type="text" id="lengthCon" className="input-field" />
        </div>
      </div>

      <aside className="pic-section">
        <div className="number-grid-container">
          <div className="pic-header">Pic</div>
          <div className="number-pair">
            <span
              className={selectedPic === 1 ? "selected" : ""}
              onClick={() => setSelectedPic(1)}
            >
              1
            </span>
            <span
              className={selectedPic === 7 ? "selected" : ""}
              onClick={() => setSelectedPic(7)}
            >
              7
            </span>
          </div>
          <div className="number-pair">
            <span
              className={selectedPic === 2 ? "selected" : ""}
              onClick={() => setSelectedPic(2)}
            >
              2
            </span>
            <span
              className={selectedPic === 8 ? "selected" : ""}
              onClick={() => setSelectedPic(8)}
            >
              8
            </span>
          </div>
          <div className="number-pair">
            <span
              className={selectedPic === 3 ? "selected" : ""}
              onClick={() => setSelectedPic(3)}
            >
              3
            </span>
            <span
              className={selectedPic === 9 ? "selected" : ""}
              onClick={() => setSelectedPic(9)}
            >
              9
            </span>
          </div>
          <div className="number-pair">
            <span
              className={selectedPic === 4 ? "selected" : ""}
              onClick={() => setSelectedPic(4)}
            >
              4
            </span>
            <span
              className={selectedPic === 10 ? "selected" : ""}
              onClick={() => setSelectedPic(10)}
            >
              10
            </span>
          </div>
          <div className="number-pair">
            <span
              className={selectedPic === 5 ? "selected" : ""}
              onClick={() => setSelectedPic(5)}
            >
              5
            </span>
            <span
              className={selectedPic === 11 ? "selected" : ""}
              onClick={() => setSelectedPic(11)}
            >
              11
            </span>
          </div>
          <div className="number-pair">
            <span
              className={selectedPic === 6 ? "selected" : ""}
              onClick={() => setSelectedPic(6)}
            >
              6
            </span>
            <span
              className={selectedPic === 12 ? "selected" : ""}
              onClick={() => setSelectedPic(12)}
            >
              12
            </span>
          </div>
        </div>
        <div className="checkbox-section">
          <label className="checkbox-label">
            <input type="checkbox" /> Taxable
          </label>
          <label className="checkbox-label">
            <input type="checkbox" /> Pay Comm
          </label>
        </div>
      </aside>
    </div>
  );
};

export default UpperSection;
