import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect } from "react";
import nf3 from "../../public/nf3.jpeg";
import nf4 from "../../public/nf4.webp";

gsap.registerPlugin(ScrollTrigger);

const imageList = [
  { src: nf3, alt: "" },
  { src: nf4, alt: "" },
  { src: nf3, alt: "" },
  { src: nf4, alt: "" },
  { src: nf3, alt: "" },
  { src: nf4, alt: "" },
];
const imageList2 = [
  { src: nf4, alt: "" },
  { src: nf3, alt: "" },
  { src: nf4, alt: "" },
  { src: nf3, alt: "" },
  { src: nf4, alt: "" },
  { src: nf3, alt: "" },
];
const imageList3 = [
  { src: nf3, alt: "" },
  { src: nf4, alt: "" },
  { src: nf3, alt: "" },
  { src: nf4, alt: "" },
  { src: nf3, alt: "" },
  { src: nf4, alt: "" },
];

export default function CustomersText() {
  useLayoutEffect(() => {
    const textSections = gsap.utils.toArray(".demo-text");
    const textWrapper = gsap.utils.toArray(".customers__wrapper");

    textSections.forEach((section, index) => {
      const w = textWrapper[index];
      const [x, xEnd] =
        index % 2 === 0 // Even-indexed sections
          ? [w.scrollWidth * -0.5, 0]
          : [w.scrollWidth * 0.5, section.offsetWidth * -0.5];
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 2,
          },
        }
      );
    });
  }, []);
  return (
    <div className="customers">
      <section className="demo-text">
        <div className="customers__wrapper text">
          BINGO | ARGETA | BIMAL | BAJRA | BASSIVITY | RAIFFEISEN | FACETV
        </div>
      </section>
      <section className="demo-text">
        <div className="customers__wrapper text">
          EUROASFALT | BHTELECOM | BAJRA | RAIFFEISEN | BASSIVITY | BIMAL
        </div>
      </section>
      <section className="demo-text" style={{ marginBottom: "24px" }}>
        <div className="customers__wrapper text">
          RAIFFEISEN | FACETV | RAIFFAISEN | BASSIVITY | BAJRA | BIMAL
        </div>
      </section>
      <section className="demo-text">
        <ul className="customers__wrapper ">
          {imageList.map((image, index) => (
            <li key={index}>
              <Image
                width={300}
                height={300}
                className="the-img"
                src={image.src}
                alt={image.alt}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="demo-text">
        <ul className="customers__wrapper ">
          {imageList2.map((image, index) => (
            <li key={index}>
              <Image
                width={300}
                height={300}
                className="the-img"
                src={image.src}
                alt={image.alt}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="demo-text">
        <ul className="customers__wrapper ">
          {imageList3.map((image, index) => (
            <li key={index}>
              <Image
                width={300}
                height={300}
                className="the-img"
                src={image.src}
                alt={image.alt}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
