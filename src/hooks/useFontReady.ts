import { useEffect, useState } from "react";

export const useFontReady = () => {
  const [isFontReady, setIsFontReady] = useState(false);

  useEffect(() => {
    // フォント読み込み完了を待つ
    document.fonts.ready.then(() => {
      setIsFontReady(true);
    });
  }, []);

  return isFontReady;
};
