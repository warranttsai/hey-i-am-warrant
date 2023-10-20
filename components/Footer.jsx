import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer-container"
      className="d-flex flex-1 flex-column justify-contnet-center align-items-center w-100"
      style={{
        backgroundColor: "#1976d2",
        color: "white",
        paddingBlock: 20,
      }}
    >
      <span>Thank you for visiting! Hope you have a nice day!</span>
    </footer>
  );
}
