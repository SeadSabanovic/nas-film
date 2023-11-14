import gsap from "gsap";
import { useEffect } from "react";

export default function Audio() {
  useEffect(() => {
    gsap.to(".audio .audio__line", {
      duration: 0.5,
      height: `random(0,90)` + "%",
      yoyo: true,
      ease: "rough ({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",
      repeat: -1,
      repeatRefresh: true,
    });
  }, []);
  return (
    <div className="audio">
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
      <div className="audio__line"></div>
    </div>
  );
}
