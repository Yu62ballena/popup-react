type SplideImageProps = {
  image: string;
  alt: string;
  lazy: boolean;
  width: number;
  height: number;
  fetchPriority: boolean;
};

function SplideImage({ image, alt, lazy = false, width, height, fetchPriority }: SplideImageProps) {
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
            {...(fetchPriority && { fetchpriority: "high" })}
          />
        </picture>
      </div>
    </li>
  );
}

export default SplideImage;
