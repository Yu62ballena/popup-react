import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Message() {
  const messageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
        if (!messageRef.current) {
          return;
        }

        const messageAnimation = new SplitText(
          messageRef.current.querySelectorAll("h2, p"),
          { type: "lines" }
        );

        const messageLines = messageAnimation.lines;

        gsap.from(messageLines, {
          autoAlpha: 0,
          y: 50,
          stagger: 0.15,
          duration: 0.5,
          scrollTrigger: {
            trigger: messageRef.current,
            start: "top 60%",
          },
        });
    },
    { scope: messageRef }
  );

  return (
    <section
      ref={messageRef}
      className="text-center mt-24 mb-24 overflow-hidden text-lg leading-normal"
      id="message"
    >
      <div className="w-4/5 mx-auto mb-24">
        <h2 className="text-2xl font-bold mb-7">
          本場香港の魅力を、もっと身近に感じてほしいから
        </h2>
        <p>
          銀座『喜記』は日本にいながら香港をまるごと味わえる、
          <br />
          料理を通して日本と香港の架け橋を目指しています。
          <br />
        </p>
        <br />
        <p>
          創業より約7年、本場で修行した熟練のシェフがお作りする料理は、
          <br />
          おかげさまで多くのお客様にお楽しみいただいております。
          <br />
          <br />
        </p>
        <br />
        <p>
          そんな銀座『喜記』プロデュースによる香港スイーツ専門店が期間限定でOPEN。
        </p>
      </div>

      <div className="w-4/5 mx-auto">
        <h2 className="text-2xl font-bold mb-7">
          香港にはお料理だけでなく魅力的なスイーツがたくさん
        </h2>
        <p>
          香港を知る人にはもちろん、初めての人にもどこか懐かしく新しい。
          <br />
          全て手作りの職人技が光る、心ほどける甘さと香りをお届けします。
          <br />
        </p>
        <br />
        <p>期間限定のおいしさ、どうぞお見逃しなく。</p>
      </div>
    </section>
  );
}

export default Message;
