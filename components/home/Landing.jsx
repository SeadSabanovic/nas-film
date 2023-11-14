import React, { useLayoutEffect, useRef } from "react";
import Wrap from "../UI/Wrap";
import Image from "next/image";
import circle from "../../public/circle.svg";
import nf from "../../public/nf.jpeg";
import nf2 from "../../public/nf2.jpeg";
import nf3 from "../../public/nf3.jpeg";
import gsap from "gsap";

export default function Landing() {
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const img4 = useRef();
  const circleImg = useRef();

  let tl;

  useLayoutEffect(() => {
    gsap.to(circleImg.current, {
      ease: "none",
      rotate: 360,
      duration: 20,
      repeat: -1,
    });

    tl = gsap.timeline();

    setTimeout(() => {
      img1.current.classList.add("reveal");
      img2.current.classList.add("reveal");
      img3.current.classList.add("reveal");
      img4.current.classList.add("reveal");
    }, 500);

    tl.to(img1.current, {
      y: -200,
      scrollTrigger: {
        scrub: 1,
      },
    })
      .to(img2.current, {
        y: -600,
        scrollTrigger: {
          scrub: 1,
        },
      })
      .to(img3.current, {
        y: -300,
        scrollTrigger: {
          scrub: 1,
        },
      })
      .to(img4.current, {
        y: 200,
        scrollTrigger: {
          scrub: 1,
        },
      });
  }, []);

  return (
    <div className="landing">
      <Wrap>
        <div className="landing__content">
          <div className="landing__content__text">
            <h1 className="landing__content__text__title">
              NAŠ FILM <small>2013 - 2023</small>
            </h1>
            <h3 className="landing__content__text__subtitle">
              Pouzdan Partner u audio i video produkciji
            </h3>
          </div>
        </div>
      </Wrap>
      <div className="landing__gallery">
        <Image
          ref={img1}
          className="landing__gallery__img"
          src={nf}
          height={200}
          alt=""
          priority
        ></Image>
        <Image
          ref={img2}
          className="landing__gallery__img"
          src={nf2}
          height={300}
          alt=""
          priority
        ></Image>
        <Image
          ref={img3}
          className="landing__gallery__img"
          src={nf3}
          height={300}
          alt=""
          priority
        ></Image>
        <Image
          ref={img4}
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
