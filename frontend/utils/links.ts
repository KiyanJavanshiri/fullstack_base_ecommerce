import { IconType } from "react-icons";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from "react-icons/io5";

type TPath = {
  title: string;
  path: string;
};

type TSocialLinks = Omit<TPath, "title"> & { Icon: IconType };

export const PATHS: TPath[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Product",
    path: "/product",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

export const SOCIAL_LINKS: TSocialLinks[] = [
  {
    Icon: IoLogoInstagram,
    path: "/",
  },
  {
    Icon: IoLogoFacebook,
    path: "/",
  },
  {
    Icon: IoLogoTwitter,
    path: "/",
  },
];
