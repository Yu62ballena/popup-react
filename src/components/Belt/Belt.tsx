import Image from "./Image";

function Belt() {
  return (
    <section className="w-full sm:h-[500px] h-60 mt-20 sm:mt-32 mb-32 flex gap-0 overflow-hidden">
      <Image
        image="belt-image-left.webp"
        animationValue={-100}
        alt="店舗ポスター"
        width={1000}
        height={1500}
      />
      <Image
        image="belt-image-right.webp"
        animationValue={100}
        alt="バターボーローバン"
        width={1000}
        height={1500}
      />
    </section>
  );
}

export default Belt;
