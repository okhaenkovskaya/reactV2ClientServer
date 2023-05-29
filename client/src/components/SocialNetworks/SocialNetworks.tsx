import { Link } from "react-router-dom";

import style from "./SocialNetworks.module.scss";
import socialNetworkData from "../../data/socialNetworks.tsx";

type ItemProps = {
    id: number;
    text: string;
    svg: JSX.Element;
    link: string;
};

const SocialNetworks = () => {
  return (
      <>
        <h2 className={style.title}>{socialNetworkData.title}</h2>
        <ul className={style.socialNetworks}>
            {socialNetworkData.items.map((item: ItemProps) =>(
                <li key={item.id}>
                    <Link to={item.link}>
                        <span>{item.text}</span>
                        {item.svg}
                    </Link>
                </li>
            ))}
        </ul>
      </>
  );
};

export default SocialNetworks;
