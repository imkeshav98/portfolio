import IMG1 from "../../assets/dermstore-clone.jpg";
import IMG2 from "../../assets/bobby-brown-clone.jpg";
import IMG3 from "../../assets/weather-app.jpg";

export let projects = [
  {
    id: 1,
    image: IMG2,
    title: "Bobbi Brown Clone",
    description:
      "E-Commerce website for Women cosmetic products. User can login, add items to cart. Fully responsive pages and much more.",
    github: "https://github.com/imkeshav98/bobbibrown",
    demo: "https://bobbibrown.vercel.app/",
    techstack: ["React", "Node.js", "MongoDb", "CSS", "Bootstrap"],
  },
  {
    id: 2,
    image: IMG3,
    title: "Weather Finder",
    description:
      "Weather website using Openweather API. Designed UI from scratch and added whole functionality",
    github: "https://github.com/imkeshav98/weather/tree/main",
    demo: "https://weatheriify.netlify.app/",
    techstack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    image: IMG1,
    title: "Dermstore Clone",
    description:
      "E-Commerce website for beauty products. Made landing pages, login and signup pages, product category pages and more",
    github: "https://github.com/imkeshav98/dermClone",
    demo: "https://dermclone.netlify.app/",
    techstack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];
