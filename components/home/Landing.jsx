import React, { useLayoutEffect, useRef } from "react";
import Wrap from "../UI/Wrap";
import Image from "next/image";
import circle from "../../public/circle.svg";
import nf from "../../public/nf.jpeg";
import nf2 from "../../public/nf2.webp";
import nf3 from "../../public/nf3.jpeg";
import gsap from "gsap";

export default function Landing() {
  const circleImg = useRef();

  useLayoutEffect(() => {
    gsap.to(circleImg.current, {
      ease: "none",
      rotate: 360,
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <div className="landing">
      <Wrap>
        <div className="landing__content">
          <div className="landing__content__text">
            <h1 className="landing__content__text__title">
              NAŠ FILM <small>xxxx - 2023</small>
            </h1>
            <h3>Pouzdan Partner u audio i video produkciji</h3>
          </div>
        </div>
      </Wrap>
      <div className="landing__gallery">
        <Image
          className="landing__gallery__img"
          src={nf}
          height={200}
          alt=""
          priority
        ></Image>
        <Image
          className="landing__gallery__img"
          src={nf2}
          height={300}
          alt=""
          priority
        ></Image>
        <Image
          className="landing__gallery__img"
          src={nf3}
          height={300}
          alt=""
          priority
        ></Image>
        <Image
          className="landing__gallery__img"
          src={nf}
          height={100}
          alt=""
          priority
        ></Image>
      </div>
      <Image
        ref={circleImg}
        src={circle}
        width={400}
        className="landing__circle"
        alt=""
      />
    </div>
  );
}
