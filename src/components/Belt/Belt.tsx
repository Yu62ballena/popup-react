import Image from "./Image";

function Belt() {
  return (
    <section className="w-full h-[500px] mt-32 mb-32 flex gap-0 overflow-hidden">
      <Image image="0425_001.jpg" animationValue={-100} />
      <Image image="0425_006.jpg" animationValue={100} />
    </section>
  );
}

export default Belt;
