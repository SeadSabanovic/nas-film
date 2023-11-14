import Link from "next/link";
import React from "react";
import Wrap from "./UI/Wrap";

export default function Navigation() {
  return (
    <div className="navigation">
      <Wrap>
        <div className="navigation__inner">
          <h1 className="navigation__logo">NF</h1>
          <ul className="navigation__links">
            <li className="navigation__links__link">
              <Link scroll={false} href={"/"}>
                Home
              </Link>
            </li>
            <li className="navigation__links__link">
              <Link scroll={false} href={"about"}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </Wrap>
    </div>
  );
}
