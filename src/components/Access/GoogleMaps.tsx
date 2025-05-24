import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type GoogleMapsProps = {
  src: string;
  loading?: "lazy" | "eager";
  title?: string;
};

function GoogleMaps({
  src,
  loading = "lazy",
  title = "Google Maps",
}: GoogleMapsProps) {
  const mapRef = useRef<HTMLIFrameElement>(null);

  useGSAP(() => {
    gsap.from(mapRef.current, {
      autoAlpha: 0,
      y: 200,
      x: 200,
      duration: 1.5,
      filter: "blur(30px)",
      scrollTrigger: {
        trigger: mapRef.current,
        start: "top 60%",
      },
    });
  });

  return (
    <iframe
      ref={mapRef}
      className="w-full h-full"
      src={src}
      style={{ border: 0 }}
      loading={loading}
      title={title}
    ></iframe>
  );
}

export default GoogleMaps;
