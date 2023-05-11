import { Link } from "react-router-dom";

import { SvgFacebook, SvgGoogle, SvgTwitter } from "../Icon";
import style from "./SocialNetworks.module.scss";

const SocialNetworks = () => {
  return (
    <ul className={style.socialNetworks}>
      <li>
        <Link to="#">
          <SvgFacebook color={"#2f16c8"} />
        </Link>
      </li>
      <li>
        <Link to="#">
          <SvgGoogle color={"#4cff2e"} />
        </Link>
      </li>
      <li>
        <Link to="#">
          <SvgTwitter color={"#2ed3ff"} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialNetworks;
