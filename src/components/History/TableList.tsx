// import { FaExternalLinkAlt } from "react-icons/fa";

type TableListProps = {
  date: string;
  location: string;
};

function TableList({ date, location }: TableListProps) {
  return (
    <>
      <tr className="relative px-3 h-16 align-middle">
        <td className="leading-tight w-32 sm:w-40 pl-2">{date}</td>
        <td className="leading-tight text-left pl-2">{location}</td>

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
      <tr>
        <td
          colSpan={2}
          className="p-0"
        >
          <div className="w-full h-0.5 bg-gray-300" />
        </td>
      </tr>
    </>
  );
}

export default TableList;
