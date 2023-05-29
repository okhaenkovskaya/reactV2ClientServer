import { SvgFacebook, SvgGoogle, SvgTwitter } from "../components/Icon";

export const socialNetworkData = {
  title: "follow me",
  items: [
    {
      id: 0,
      text: "loremm facebook",
      svg: <SvgFacebook />,
      link: "https://facebook.com/",
    },
    {
      id: 1,
      text: "loremm google",
      svg: <SvgGoogle />,
      link: "https://www.google.com.ua/",
    },
    {
      id: 2,
      text: "loremm twitter",
      svg: <SvgTwitter />,
      link: "https://twitter.com/",
    }
  ],
};

export default socialNetworkData;