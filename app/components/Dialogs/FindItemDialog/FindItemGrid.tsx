import React from "react";

const FindItemGrid = () => {
  const headers = [
    "ScanCode",
    "Title",
    "Art Code",
    "Height",
    "Width",
    "Asking Price",
    "Location",
    "Artist",
    "Cons.",
    "Vendor #",
  ];

  const data = [
    // Example data, replace with actual data
    {
      scanCode: "12345",
      title: "Art Piece 1",
      artCode: "A1",
      height: "20",
      width: "30",
      askingPrice: "1000",
      location: "Gallery 1",
      artist: "Artist A",
      cons: "Yes",
      vendor: "V123",
    },
    // Add more data as needed
  ];

  // Empty rows for demo purposes, feel free to remove
  const rowHeight = 20;
  const containerHeight = 200;
  const numEmptyRows = Math.floor(containerHeight / rowHeight) - data.length;

  return (
    <div className="contacts-transactions-tab">
      <div className="contacts-transactions-header">
        <div className="radio-group">
          <label className="checkbox">
            <input type="checkbox" name="itemType" defaultChecked />
            Consigned
          </label>
          <label className="radio-label">
            <input type="radio" name="itemType" />
            UnSold
          </label>
          <label className="radio-label">
            <input type="radio" name="itemType" />
            All Items
          </label>
        </div>
      </div>

      <div className="contacts-transactions-grid">
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.scanCode}</td>
                <td>{row.title}</td>
                <td>{row.artCode}</td>
                <td>{row.height}</td>
                <td>{row.width}</td>
                <td className="money">{row.askingPrice}</td>
                <td>{row.location}</td>
                <td>{row.artist}</td>
                <td>{row.cons}</td>
                <td>{row.vendor}</td>
              </tr>
            ))}
            {[...Array(numEmptyRows)].map((_, index) => (
              <tr key={`empty-${index}`}>
                <td colSpan={headers.length}>&nbsp;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FindItemGrid;
