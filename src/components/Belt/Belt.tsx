import Image from "./Image";

function Belt() {
  return (
    <section className="w-full sm:h-[500px] h-60 mt-20 sm:mt-32 mb-32 flex gap-0 overflow-hidden">
      <Image image="0425_001.webp" animationValue={-100} alt="マーラーガオイメージ画像" width={1000} height={1500} />
      <Image image="0425_006.webp" animationValue={100} alt="エッグタルトイメージ画像" width={1000} height={1500} />
    </section>
  );
}

export default Belt;
