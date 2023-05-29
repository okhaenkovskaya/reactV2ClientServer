import { useState, useEffect } from "react";

import style from "./PromptScroll.module.scss";

const PromptScroll = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return scroll ? <div className={style.prompt}>You are scrolling</div> : null;
};

export default PromptScroll;
