// import { forwardRef } from "react";
import { listItems } from "../../constants/listItems";
import ListItem from "./ListItem";

type LogoNavigationProps = {
  logoRef?: React.RefObject<HTMLDivElement | null>;
  navLinksRef?: React.RefObject<HTMLDivElement | null>;
};

const LogoNavigation = ({ logoRef, navLinksRef }: LogoNavigationProps) => {
  return (
    <div className="absolute z-40 w-full sm:w-11/12 px-2 sm:px-0 h-24 sm:h-44 flex justify-between items-start left-0 sm:left-[4%]  mt-3">
      {/* ロゴ画像 */}
      <div
        ref={logoRef}
        className="w-24 aspect-[2/3] h-auto -translate-y-2.5 ml-1 sm:ml-0"
      >
        <picture>
          <source
            srcSet="./images/logo.webp"
            type="image/webp"
          />
          <img
            className="w-full h-full object-contain"
            src="./images/logo.png"
            width="282"
            height="200"
            alt="ロゴ画像"
          />
        </picture>
      </div>

      {/* ナビ（リンク） */}
      <div
        ref={navLinksRef}
        className="mt-3 sm:mt-0 sm:translate-y-4 z-40"
      >
        <ul className="flex gap-7 sm:mt-7">
          {listItems.map((item) => (
            <ListItem
              key={item.id}
              {...item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoNavigation;
