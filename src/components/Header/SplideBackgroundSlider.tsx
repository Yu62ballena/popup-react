import { useEffect } from "react";
import { Splide } from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SplideImage from "./SplideImage";
import { splideImages } from "../../constants/splideImages";

type SplideProps = {
  splideRef?: React.RefObject<HTMLDivElement | null>;
};

function SplideBackgroundSlider({ splideRef }: SplideProps) {
  useEffect(() => {
    if (splideRef?.current) {
      const splide = new Splide(splideRef.current, {
        type: "fade",
        rewind: true,
        autoplay: true,
        interval: 5000,
        arrows: false,
        pagination: true,
        speed: 4000,
        pauseOnHover: false,
      });

      splide.mount();

      return () => {
        splide.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={splideRef}
      className="splide absolute top-0 left-0 h-full w-full z-20"
      aria-label="main-bg-slide"
    >
      <div className="splide__track w-full h-full">
        <ul className="splide__list w-full h-full">
          {splideImages.map((si) => (
            <SplideImage
              key={si.id}
              {...si}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SplideBackgroundSlider;
