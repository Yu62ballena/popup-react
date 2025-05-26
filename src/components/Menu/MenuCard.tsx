type MenuCardProps = {
  name: string;
  image: string;
  description: string;
  price: string;
  width: number;
  height: number;
};

function MenuCard({ name, image, description, price, width, height }: MenuCardProps) {
  return (
    <div className="mb-12 md:mb-10 shadow-2xl">
      <h3 className="text-2xl my-2.5 mx-0 font-bold">{name}</h3>

      <picture>
        <source
          srcSet={`./images/${image}`}
          type="image/webp"
        />
        <img
          className="w-full mb-2.5"
          src={`./images/${image.replace(/\.webp$/i, ".jpg")}`}
          alt={name}
          loading="lazy"
          width={width}
          height={height}
        />
      </picture>
      <p className="text-lg mb-2.5 ml-2.5 leading-normal">{description}</p>
      <span className="block ml-auto font-bold w-fit mr-3 mb-3">
        {price}円(税込)
      </span>
    </div>
  );
}

export default MenuCard;
