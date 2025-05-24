import { useScrollTo } from "../../hooks/useScrollTo";

type ListItemProps = {
  title: string;
  scrollTo: string;
};

function ListItem({title, scrollTo}: ListItemProps) {
  const scrollToElement = useScrollTo();

  const handleMenuClick = (targetId: string) => {
    scrollToElement(targetId);
  };

  return (
    <li
      className="text-2xl cursor-pointer  hover:text-gray-500"
      onClick={() => handleMenuClick(scrollTo)}
    >
      {title}
    </li>
  );
}

export default ListItem;
