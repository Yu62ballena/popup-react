type SplideImageProps = {
  image: string;
  alt: string;
  lazy: boolean;
  width: number;
  height: number;
  contain: boolean;
  fetchpriority: boolean;
};

function SplideImage({ image, alt, lazy = false, width, height, contain, fetchpriority }: SplideImageProps) {
  return (
    <li className="splide__slide w-full h-full">
      <div className="w-full h-full">
        <picture>
          <source
            srcSet={`./images/${image}`}
            type="image/webp"
          />
          <img
            // className="w-full h-full object-contain"
            className={`w-full h-full ${contain ? "object-contain" : "object-cover"}`}
            src={`./images/${image.replace(/\.webp$/i, ".jpg")}`}
            alt={alt}
            width={width}
            height={height}
            {...(lazy && { loading: "lazy" })}
            {...(fetchpriority && { fetchpriority: "high" })}
          />
        </picture>
      </div>
    </li>
  );
}

export default SplideImage;
