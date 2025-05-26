type SplideImageProps = {
  image: string;
  alt: string;
  lazy: boolean;
  width: number;
  height: number;
};

function SplideImage({ image, alt, lazy = false, width, height }: SplideImageProps) {
  return (
    <li className="splide__slide w-full h-full">
      <div className="w-full h-full">
        <picture>
          <source
            srcSet={`./images/${image}`}
            type="image/webp"
          />
          <img
            className="w-full h-full object-cover"
            src={`./images/${image.replace(/\.webp$/i, ".jpg")}`}
            alt={alt}
            width={width}
            height={height}
            {...(lazy && { loading: "lazy" })}
          />
        </picture>
      </div>
    </li>
  );
}

export default SplideImage;
