import React from "react";
import "./style.css";
const QRcode = () => {
  return (
    <div>
      <div className="qr-container">
        <img src="src/images/image-qr-code.png" />
        <div className="production-1">
          <p>Improve your front-end skills by building projects</p>
        </div>
        <div className="production-2">
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRcode;
