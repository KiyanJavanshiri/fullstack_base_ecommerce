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
type TCategoryLinks =  Omit<TPath, "path"> & { img: string; category: string; subCategory: string };

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

export const CATEGORIES_LINKS: TCategoryLinks[] = [
  {
    title: "hoodies",
    category: "clothing",
    subCategory: "hoodie",
    img: "/images/clothes.jpg"
  },
  {
    title: "jackets",
    category: "clothing",
    subCategory: "jacket",
    img: "/images/clothes.jpg"
  },
  {
    title: "shorts",
    category: "clothing",
    subCategory: "shorts",
    img: "/images/clothes.jpg"
  },
  {
    title: "sneakers",
    category: "shoes",
    subCategory: "sneakers",
    img: "/images/clothes.jpg"
  },
  {
    title: "hoodies",
    category: "clothing",
    subCategory: "hoodie",
    img: "/images/clothes.jpg"
  },
  {
    title: "hoodies",
    category: "clothing",
    subCategory: "hoodie",
    img: "/images/clothes.jpg"
  },
]
