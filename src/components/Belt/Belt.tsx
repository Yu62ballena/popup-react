import Image from "./Image";

function Belt() {
  return (
    <section className="w-full h-[500px] sm:h-80 mt-20 sm:mt-32 mb-32 flex gap-0 overflow-hidden">
      <Image image="0425_001.jpg" animationValue={-100} alt="マーラーガオイメージ画像" />
      <Image image="0425_006.jpg" animationValue={100} alt="エッグタルトイメージ画像" />
    </section>
  );
}

export default Belt;
