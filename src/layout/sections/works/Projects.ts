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
};

export const works: WorkType[] = [
  {
    title: "Production Web site",
    img: luxus,
    link: "https://luxusco.com/",
    category: "web",
    tags: ["React", "Redux", "TypeScript", "SCSS"],
    description:
      "A production website for a luxury fashion brand showcasing their products and collections.",
    variant: "large",
  },
  {
    title: "Buka Shop",
    img: buka,
    link: "https://shop.buka.ru/",
    category: "web",
    tags: ["Next.js", "Redux", "TypeScript", "SCSS"],
    description:
      "An e-commerce platform for Buka Shop, featuring a wide range of products and seamless shopping experience.",
    variant: "large",
  },
  {
    title: "Theo Ivanov Landing Page",
    img: theo,
    link: "https://usa.tattoo/seattlebooking/",
    category: "web",
    tags: ["JavaScript", "Gsap", "SCSS"],
    description:
      "A landing page for Theo Ivanov, a renowned tattoo artist, showcasing his portfolio and booking information.",
    variant: "large",
  },
  {
    title: "Articles App",
    img: articles,
    link: "https://github.com/Tsukimono13/Production_project",
    category: "web",
    tags: ["React", "Redux-Toolkit", "RTK Query", "TypeScript"],
    description:
      "A web application for reading and managing articles with user authentication and CRUD functionalities.",
    variant: "large",
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
