declare namespace PageContent {
  interface Hero {
    title: string;
    button: Button;
    image: Image;
  }

  interface CTA {
    title: string;
    body: string;
    button: ButtonCTA;
  }

  type Popup = {
    title: string;
    body: string;
  };

  type ButtonCTA = {
    title: string;
    onClick?: void;
  };

  type Button = {
    title: string;
    url: string;
  };

  type Image = {
    src: string;
    alt: string;
  };
}
