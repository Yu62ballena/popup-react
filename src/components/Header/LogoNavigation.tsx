// import { forwardRef } from "react";
import { listItems } from "../../constants/listItems";
import ListItem from "./ListItem";

type LogoNavigationProps = {
  logoRef?: React.RefObject<HTMLDivElement | null>;
  navLinksRef?: React.RefObject<HTMLDivElement | null>;
};

const LogoNavigation = ({ logoRef, navLinksRef }: LogoNavigationProps) => {
  return (
    <div className="absolute z-40 w-11/12 h-44 flex justify-between items-start left-[4%] mt-3">
      {/* ロゴ画像 */}
      <div
        ref={logoRef}
        className="w-24 aspect-[2/3] h-auto -translate-y-2.5"
      >
        <img
          className="w-full h-full object-contain"
          src="/images/logo.png"
          alt=""
        />
      </div>

      {/* ナビ（リンク） */}
      <div
        ref={navLinksRef}
        className="translate-y-4 z-40"
      >
        <ul className="flex gap-7 mt-7">
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
