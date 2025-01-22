import React from "react";

const FindItemGrid = () => {
  return (
    <div className="grid-container">
      <table className="find-item-grid">
        <thead>
          <tr>
            <th>ScanCode</th>
            <th>Title</th>
            <th>Art Code</th>
            <th>Height</th>
            <th>Width</th>
            <th>Asking Price</th>
            <th>Location</th>
            <th>Artist</th>
            <th>Cons.</th>
            <th>Vendor #</th>
          </tr>
        </thead>
        <tbody>{/* Grid rows will go here */}</tbody>
      </table>
    </div>
  );
};

export default FindItemGrid;
