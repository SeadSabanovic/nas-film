import Navigation from "../Navigation";

import { Oswald, Merriweather } from "next/font/google";

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
  variable: "--font-title",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function layout({ children }) {
  return (
    <div className={`page ${merriweather.className} ${oswald.variable}`}>
      <Navigation></Navigation>
      <main>{children}</main>
    </div>
  );
}
