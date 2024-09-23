import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
  <div className="footer-content">
    <h5 className="logo">SyncHub</h5>
    <div className="footer-lists">
      {/* Contact List */}
      <ul className="list">
        <li>
          <h6>Contact</h6>
        </li>
        <li>
          <p>VIT Vellore<br />632014</p>
        </li>
        <li>
          <p>General Inquiries<br />teamsync@gmail.com</p>
        </li>
      </ul>

      {/* Terms & Conditions List */}
      <ul className="list">
        <li>
          <h6>Terms & Conditions</h6>
        </li>
        <li><p>Privacy Policy</p></li>
        <li><p>Follow</p></li>
      </ul>

      {/* Subscribe List */}
      <ul className="list">
        <li><h6>Subscribe</h6></li>
        <li><span>Stay Updated on the latest from SyncHub</span></li>
        <li>
          <button className="subscribe-btn">Subscribe</button>
        </li>
      </ul>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
