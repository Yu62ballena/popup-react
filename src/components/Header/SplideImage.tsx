type SplideImageProps = {
  image: string;
  alt: string;
};

function SplideImage({ image, alt }: SplideImageProps) {
  return (
    <li className="splide__slide w-full h-full">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={`/images/${image}`}
          alt={alt}
          loading="lazy"
        />
      </div>
    </li>
  );
}

export default SplideImage;
