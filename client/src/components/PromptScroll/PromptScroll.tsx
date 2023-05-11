import { useState, useEffect } from "react";

import style from "./PromptScroll.module.scss";

const PromptScroll = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    function handkeScroll() {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handkeScroll);

    return () => {
      window.removeEventListener("scroll", handkeScroll);
    };
  }, [scroll]);

  return scroll && <div className={style.prompt}>You are scrolling</div>;
};

export default PromptScroll;
