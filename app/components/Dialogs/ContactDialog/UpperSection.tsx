import React from "react";

const UpperSection: React.FC = () => {
  return (
    <div className="contact-upper-section">
      <div className="contact-details">
        <div className="contact-form-group contact-id">
          <input
            type="text"
            className="contact-input-field"
            defaultValue="634"
          />
          <input
            type="text"
            className="contact-input-field"
            defaultValue="(Nikol) Sackelm, Jane"
          />
          <select className="contact-input-field">
            <option>Julie</option>
          </select>
        </div>

        <div className="contact-form-group">
          <label>Name</label>
          <input
            type="text"
            className="contact-input-field"
            defaultValue="Jane"
          />
          <input
            type="text"
            className="contact-input-field"
            defaultValue="(Nikol) Sackelm"
          />
        </div>

        <div className="contact-form-group">
          <label>Comp</label>
          <input type="text" className="contact-input-field" />
        </div>

        <div className="contact-form-group">
          <label>Spouse</label>
          <input type="text" className="contact-input-field" />
        </div>

        <div className="contact-form-group">
          <label>Email</label>
          <input
            type="text"
            className="contact-input-field"
            defaultValue="jsackelm@dartco.com"
          />
        </div>

        <div className="contact-form-group">
          <label>URL</label>
          <input type="text" className="contact-input-field" />
        </div>

        <div className="contact-bottom-div">
          <div className="checkbox-grid">
            <div className="checkbox">
              <input type="checkbox" id="customer" defaultChecked />
              <label htmlFor="customer">Customer</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="artist" />
              <label htmlFor="artist">Artist</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="gallery" />
              <label htmlFor="gallery">Gallery</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="vendor" />
              <label htmlFor="vendor">Vendor</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="active" defaultChecked />
              <label htmlFor="active">Active</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="outlook" />
              <label htmlFor="outlook">Outlook</label>
            </div>
          </div>
          <div className="buttons-tax-section">
            <div className="contact-form-group">
              <label>Tax ID</label>
              <input type="text" className="contact-input-field" />
            </div>
            <div className="button-stack">
              {/* <button className="action-button">eMail</button> */}
              <button className="action-button">Print Contact</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="contact-top-section">
          <div className="right-field">
            <label>Code</label>
            <input
              type="text"
              className="contact-input-field"
              defaultValue="NIKOLJ"
            />
          </div>
          <div className="right-field">
            <label>Credit Amt</label>
            <input
              type="text"
              className="contact-input-field"
              defaultValue="$0.00"
            />
          </div>
        </div>
        <div className="contact-bottom-section">
          <div className="right-field">
            <label>Terms</label>
            <input
              type="text"
              className="contact-input-field"
              defaultValue="Upon Receipt"
            />
          </div>
          <div className="right-field">
            <label>Norm Discount</label>
            <input
              type="text"
              className="contact-input-field"
              defaultValue="0.000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
