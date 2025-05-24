import { useRef, useState } from "react";
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
  const [loadError, setLoadError] = useState<boolean>(false);
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
    <>
      {loadError && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <p>地図を読み込むことが出来ませんでした</p>
        </div>
      )}
      <iframe
        ref={mapRef}
        className="w-full h-full"
        src={src}
        style={{ border: 0 }}
        loading={loading}
        title={title}
        onError={() => setLoadError(true)}
      ></iframe>
    </>
  );
}

export default GoogleMaps;
