import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import TableList from "./TableList";
import { useFontReady } from "../../hooks/useFontReady";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function History() {
  const tableRef = useRef<HTMLTableElement>(null);
  const isFontReady = useFontReady();

  useGSAP(
    () => {
      if (!isFontReady || !tableRef.current) {
        return;
      }

      const tableRows = tableRef.current.querySelectorAll("tr");

      gsap.from(tableRows, {
        autoAlpha: 0,
        y: 50,
        duration: 0.5,
        filter: "blur(30px)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 60%",
        },
      });
    },
    { scope: tableRef, dependencies: [isFontReady] }
  );

  return (
    <section className="mb-32">
      <SectionTitle title="Event Store History" />

      <div className="w-3/6 mx-auto">
        <table
          ref={tableRef}
          className="text-xl w-full"
        >
          <TableList
            date="2025-05-20"
            location="銀座 EXITMELSA 1F"
          />
          {/* また開催したら、ここにTableListを読み込んでいけばOK */}
          {/* イベントの開始日と、開催場所を設定 */}
        </table>
      </div>
    </section>
  );
}

export default History;
