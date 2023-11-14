import React, { useLayoutEffect, useRef } from "react";
import Wrap from "../UI/Wrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import sarajevo from "../../public/sarajevo.svg";
import Image from "next/image";
import Audio from "./Audio";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const section = useRef();
  const overlay = useRef();
  const image = useRef();
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.to(overlay.current, {
      scaleY: 0,
      scrollTrigger: {
        trigger: section.current,
        scrub: 1,
      },
    });

    tl.to(image.current, {
      scale: 1.2,
      scrollTrigger: {
        trigger: section.current,
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="about-section" ref={section}>
      <Wrap>
        <div className="about-section__content">
          <h2>Produkcija</h2>
          <p>
            Upoznajte Naš Film, vrhunsku audio i video produkcijsku kuću. Sa
            sjedištem u <span>Sarajevu</span>, ponosno nudimo široku paletu
            opreme kako bismo pružili najkvalitetnije usluge našim klijentima.
          </p>
          <Image
            loading="lazy"
            className="sarajevo"
            src={sarajevo}
            alt=""
            width={600}
          />
          <h2>AUDIO</h2>
          <p>
            U našem asortimanu možete pronaći različite vrste mikrofona koji
            odgovaraju svakom specifičnom zahtjevu snimanja zvuka. Bez obzira da
            li je u pitanju snimanje dijaloga, muzičkih instrumenata, vokala ili
            ambijentalnih zvukova, imamo mikrofone koji će zadovoljiti vaše
            potrebe. Bez obzira da li želite dodati dubinu i prostornost zvuku
            ili da postignete određeni audio efekat, naš tim će vam omogućiti da
            postignete željene rezultate.
          </p>
          <Audio />
          <h2>VIDEO</h2>
          <p>
            Kada je u pitanju video produkcija, posjedujemo najbolje kamere koje
            vam omogućavaju snimanje visokokvalitetnih video materijala. Naša
            kolekcija objektiva vam pruža različite perspektive i mogućnosti za
            snimanje, kako biste postigli željeni vizualni efekat. Također,
            koristimo i moderne dronove za snimanje iz zraka, čime dodatno
            obogatimo vaše video projekte spektakularnim pogledima i
            perspektivama. Naš tim stručnjaka uključuje i iskusne reditelje i
            producente koji su spremni da vam pomognu u ostvarenju vaše vizije.
          </p>
          <div className="strip"></div>
          <p>
            Bez obzira da li vam je potrebna pomoć u režiranju vašeg filma ili u
            organizaciji i vođenju produkcije, naš tim će vam pružiti podršku i
            stručno vođenje tokom cijelog procesa. Uz vrhunsko snimanje zvuka na
            svjetski priznatim standardima, miks i master tona na
            najkvalitetnijim zvučnicima, kao i bogat asortiman audio i video
            opreme, `Naš Film` je vaš pouzdan partner za sve vaše potrebe u
            oblasti audio i video produkcije.
          </p>
        </div>
      </Wrap>
      <div className="about-section__bg">
        <img
          ref={image}
          loading="lazy"
          src={
            "https://images.pexels.com/photos/7911758/pexels-photo-7911758.jpeg"
          }
          className="about-section__bg__img"
        />
        <div className="about-section__bg__overlay" ref={overlay}></div>
      </div>
    </div>
  );
}
