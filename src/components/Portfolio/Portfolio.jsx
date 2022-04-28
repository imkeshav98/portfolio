import "./portfolio.css";
import { projects } from "./projects";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((e) => (
          <article className="portfolio__item" key={e.id}>
            <div className="portfolio__item-image">
              <img src={e.image} alt="img" />
            </div>
            <h3>{e.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={e.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={e.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
