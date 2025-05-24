import {
  faCookieBite,
  faCalendarDays,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type StoreInfoData = {
  id: number;
  icon: IconDefinition;
  className?: string;
  title?: string;
  title2ndLine?: string;
  content: string;
  content2?: string;
  content3?: string;
  style?: React.CSSProperties;
};

export const storeInfos: StoreInfoData[] = [
  {
    id: 1,
    icon: faCookieBite,
    className: "text-amber-700",
    title: "香港スイーツ",
    title2ndLine: "PopUp Store",
    content: "〒104-0061",
    content2: "東京都中央区銀座5−7−10",
    content3: "EXITMELSA 1F",
  },
  {
    id: 2,
    icon: faCalendarDays,
    className: "text-blue-500",
    content: "2025年5月21日〜31日",
    style: { animationDelay: "0.5s" },
  },
  {
    id: 3,
    icon: faClock,
    className: "text-green-500",
    content: "11:00〜なくなり次第終了",
    content2: "(最終日17:00まで)",
    style: { animationDelay: "1s" },
  },
];
