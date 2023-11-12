import React from "react";
import Wrap from "./UI/Wrap";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="footer">
      <Wrap>
        <div className="footer__inner">
          <p>&copy; {currentYear} Naš Film. All rights reserved.</p>
        </div>
      </Wrap>
    </footer>
  );
}
