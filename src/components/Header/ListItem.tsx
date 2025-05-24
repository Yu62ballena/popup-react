import { useScrollTo } from "../../hooks/useScrollTo";

type ListItemProps = {
  title: string;
  scrollTo: string;
};

function ListItem({ title, scrollTo }: ListItemProps) {
  const scrollToElement = useScrollTo();

  const handleMenuClick = (targetId: string) => {
    scrollToElement(targetId);
  };

  return (
    <li
      className="text-2xl cursor-pointer hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
      onClick={() => handleMenuClick(scrollTo)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleMenuClick(scrollTo);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${title}セクションに移動`}
    >
      {title}
    </li>
  );
}

export default ListItem;
