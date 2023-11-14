import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function RedEpic() {
  const router = useRouter();
  const canvas = useRef();
  let context;

  const fitImageOn = (canvas, imageObj) => {
    let loadedImageWidth = imageObj.width;
    let loadedImageHeight = imageObj.height;

    let scaleFactor = Math.max(
      canvas.width / loadedImageWidth,
      canvas.height / loadedImageHeight
    );

    let newWidth = imageObj.width * scaleFactor;
    let newHeight = imageObj.height * scaleFactor;

    let x = canvas.width / 2 - newWidth / 2;
    let y = canvas.height / 2 - newHeight / 2;

    context.drawImage(imageObj, x, y, newWidth, newHeight);
  };

  useLayoutEffect(() => {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    context = canvas.current.getContext("2d");

    const frameCount = 44;
    const currentFrame = (index) =>
      `/red_epic_frames/red_${(index + 1).toString()}.jpeg`;

    const images = [];
    const epics = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(epics, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        anticipatePin: true,
        trigger: canvas.current,
        pin: true,
        scrub: 0.5,
        onToggle: ({ progress }) => {
          if (progress >= 0.99) {
            router.push(
              {
                pathname: "/about",
              },
              undefined,
              { scroll: false }
            );
          }
        },
      },
      onUpdate: render,
    });

    images[0].onload = render;

    function render() {
      // Check if the canvas and its current property are not null
      if (canvas.current && canvas.current.width && canvas.current.height) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        fitImageOn(canvas.current, images[epics.frame]);
      }
    }
  }, []);

  return (
    <div className="red-epic">
      <canvas ref={canvas}></canvas>
    </div>
  );
}
