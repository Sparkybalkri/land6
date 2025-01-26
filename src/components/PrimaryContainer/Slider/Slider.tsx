import React, { useEffect, useRef } from "react";
import styles from "./Slider.module.css";

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cloneImages = () => {
      const images = Array.from(slider.children) as HTMLElement[];
      images.forEach((img) => {
        const clone = img.cloneNode(true);
        slider.appendChild(clone);
      });
    };

    cloneImages();
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div ref={sliderRef} className={styles.slider}>
        <img src="/img-01.svg" alt="Image 1" />
        <img src="/img-02.svg" alt="Image 2" />
        <img src="/img-03.svg" alt="Image 3" />
        <img src="/img-04.svg" alt="Image 4" />
        <img src="/img-05.svg" alt="Image 5" />
        <img src="/img-06.svg" alt="Image 6" />
        <img src="/img-07.svg" alt="Image 7" />
        <img src="/img-08.svg" alt="Image 8" />
        <img src="/img-09.svg" alt="Image 9" />
        <img src="/img-10.svg" alt="Image 10" />
        <img src="/img-11.svg" alt="Image 11" />
        <img src="/img-12.svg" alt="Image 12" />
        <img src="/img-13.svg" alt="Image 13" />
        <img src="/img-14.svg" alt="Image 14" />
        <img src="/img-15.svg" alt="Image 15" />
        <img src="/img-16.svg" alt="Image 16" />
        <img src="/img-17.svg" alt="Image 17" />
      </div>
    </div>
  );
};

export default Slider;
