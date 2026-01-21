import todolist from "assets/image/works/todolist.png";
import pizza from "assets/image/works/pizza.png";
import sneakers from "assets/image/works/sneakers.png";
import github from "assets/image/works/searching.png";
import scroll from "assets/image/works/scroll.png";
import hotels from "assets/image/works/hotels.png";
import news from "assets/image/works/newsApp.png";
import luxus from "assets/image/works/luxus.png";
import articles from "assets/image/works/articles.png";
import social from "assets/image/works/social.png";
import rmSearch from "assets/image/works/rickAndMorty.png";
import buka from "assets/image/works/buka.png";
import theo from "assets/image/works/theo.png";

import BukaImage1 from "assets/image/works/buka/img_1.png";
import BukaImage2 from "assets/image/works/buka/img_2.png";
import BukaImage3 from "assets/image/works/buka/img_3.png";
import BukaImage4 from "assets/image/works/buka/img_4.png";
import BukaImage5 from "assets/image/works/buka/img_5.png";
import BukaImage6 from "assets/image/works/buka/img_6.png";
import BukaImage7 from "assets/image/works/buka/img_7.png";

import TheoImage1 from "assets/image/works/theo/img_1.png";
import TheoImage2 from "assets/image/works/theo/img_2.png";
import TheoImage3 from "assets/image/works/theo/img_3.png";
import TheoImage4 from "assets/image/works/theo/img_4.png";
import TheoImage5 from "assets/image/works/theo/img_5.png";
import TheoImage6 from "assets/image/works/theo/img_6.png";
import TheoImage7 from "assets/image/works/theo/img_7.png";

import ArticleImage1 from "assets/image/works/article-project/1_img.png";
import ArticleImage2 from "assets/image/works/article-project/2_img.png";
import ArticleImage3 from "assets/image/works/article-project/3_img.png";
import ArticleImage4 from "assets/image/works/article-project/4_img.png";
import ArticleImage5 from "assets/image/works/article-project/5_img.png";

export type WorkVariant = "large" | "small";

export type WorkType = {
  title: string;
  img: string;
  link: string;
  category: string;
  tags: string[];
  hasVideo?: boolean;
  description?: string;
  variant: WorkVariant;
  images?: string[];
};

export const works: WorkType[] = [
  {
    title: "Buka Shop",
    img: buka,
    link: "https://shop.buka.ru/",
    category: "web",
    tags: ["Next.js", "Redux", "TypeScript", "SCSS"],
    description:
      "Worked as part of a development team on the redesign of Buka Shop, an e-commerce platform offering a wide range of products and a seamless shopping experience.",
    variant: "large",
    images: [
      BukaImage1,
      BukaImage2,
      BukaImage3,
      BukaImage4,
      BukaImage5,
      BukaImage6,
      BukaImage7,
    ],
  },
  {
    title: "Theo Ivanov Landing Page",
    img: theo,
    link: "https://usa.tattoo/seattlebooking/",
    category: "web",
    tags: ["JavaScript", "Gsap", "SCSS"],
    description:
      "Developed a landing page for Theo Ivanov, a tattoo artist, showcasing portfolio, experience, and bookings, with interactive elements and smooth animations for better user engagement.",
    variant: "large",
    images: [
      TheoImage1,
      TheoImage2,
      TheoImage3,
      TheoImage4,
      TheoImage5,
      TheoImage6,
      TheoImage7,
    ],
  },
  {
    title: "Luxury Fashion Website",
    img: luxus,
    link: "https://luxusco.com/",
    category: "web",
    tags: ["React", "Redux", "TypeScript", "SCSS"],
    description:
      "Collaborated on the full redesign of a production website for a luxury fashion brand, showcasing their products and collections, as part of a development team.",
    variant: "large",
  },
  {
    title: "Articles App",
    img: articles,
    link: "https://github.com/Tsukimono13/Production_project",
    category: "web",
    tags: ["React", "Redux-Toolkit", "RTK Query", "TypeScript"],
    description:
      "Built a web application for reading and managing articles, featuring user authentication, CRUD operations, and comprehensive test coverage.",
    variant: "large",
    images: [
      ArticleImage1,
      ArticleImage2,
      ArticleImage3,
      ArticleImage4,
      ArticleImage5,
    ],
  },
  {
    title: "Social App",
    img: social,
    link: "https://github.com/Tsukimono13/Social-App",
    category: "web",
    tags: ["React", "Redux-Toolkit", "RTK Query", "TypeScript"],
    variant: "small",
  },
  {
    title: "Todolist",
    img: todolist,
    link: "https://tsukimono13.github.io/To_do_list/#/",
    category: "web",
    tags: ["React", "Redux-Toolkit", "TypeScript", "Material-UI"],
    variant: "small",
  },
  {
    title: "Rick And Morty Search",
    img: rmSearch,
    category: "web",
    link: "https://rick-and-morty-search-sigma.vercel.app/",
    tags: ["React", "Redux-Toolkit", "TypeScript", "Tailwind"],
    variant: "small",
  },
  {
    title: "Pizza Web Project",
    img: pizza,
    category: "web",
    link: "https://react-redux-pizza-blush.vercel.app/",
    tags: ["React", "Redux-Toolkit", "TypeScript", "SCSS"],
    variant: "small",
  },
  {
    title: "Booking Hotels",
    img: hotels,
    category: "web",
    link: "https://tsukimono13.github.io/Hotels_webpage/",
    tags: ["React", "TypeScript", "Styled Components"],
    variant: "small",
  },
  {
    title: "Sneakers Website",
    img: sneakers,
    category: "web",
    link: "https://sneakers-project-wine.vercel.app/",
    tags: ["React", "JavaScript", "SCSS"],
    variant: "small",
  },
  {
    title: "Searching Users on Github",
    img: github,
    category: "web",
    link: "https://tsukimono13.github.io/Searching_username/",
    tags: ["React", "Redux-Toolkit", "TypeScript", "RTK Query"],
    variant: "small",
  },
  {
    title: "Scroll WebPage",
    img: scroll,
    category: "web",
    link: "https://tsukimono13.github.io/Scroll_WebPage/",
    tags: ["JavaScript", "Gsap", "CSS", "HTML"],
    variant: "small",
  },
  {
    title: "News App",
    img: news,
    category: "mobile",
    link: "https://github.com/Tsukimono13/News_app",
    tags: ["React Native", "JavaScript", "Styled Components"],
    hasVideo: true,
    variant: "small",
  },
];
