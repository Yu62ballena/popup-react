// import { FaExternalLinkAlt } from "react-icons/fa";

type TableListProps = {
  date: string;
  location: string;
};

function TableList({ date, location }: TableListProps) {
  return (
    <tr className="relative px-3 h-16 align-middle after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-300">
      <td className="leading-tight w-40">{date}</td>
      <td className="leading-tight text-left">{location}</td>
      {/* どこかにリンクさせる場合、下記リンクを復活させて、hrefをpropsで設定 */}
      {/* <td className="">
        <a
          href="sample.com"
          className=""
        >
          <FaExternalLinkAlt />
        </a>
      </td> */}
    </tr>
  );
}

export default TableList;
