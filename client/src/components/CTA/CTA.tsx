import { useState } from "react";

import style from "./CTA.module.scss";
import Button from "../Button";
import Popup from "../Popup";

const CTA = ({ title, body, button }: PageContent.CTA) => {
  const [colorBg, setColorBG] = useState<string>(`rgb(0,0,0)`);
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false);

  const updateBG = () => {
    const randomBetween = (min: number, max: number) =>
      min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 250);
    const g = randomBetween(0, 250);
    const b = randomBetween(0, 250);
    setColorBG(`rgb(${r},${g},${b})`);
  };

  return (
    <div className={style.ctaSection} style={{ backgroundColor: `${colorBg}` }}>
      <h1 className={style.title}>{title}</h1>
      <p>{body}</p>
      <Button onClick={() => setIsShowPopup(true)}>{button.title}</Button>

      <Button onClick={updateBG}>Change BG</Button>

      {isShowPopup && (
        <Popup isShowPopup={isShowPopup} setIsShowPopup={setIsShowPopup} />
      )}
    </div>
  );
};

export default CTA;
