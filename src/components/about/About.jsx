import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FiAward } from "react-icons/fi";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward />
              <h5>Experience</h5>
              <small>3+ Years Work</small>
            </article>

            <article className="about__card">
              <FiAward />
              <h5>Client</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <FiAward />
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>
          </div>
          <p>
            I am a Fullstack Developer specialized in MERN Stack. Applying
            responsive design principles on web pages and watching them shrink
            into mobile screens and still look amazing is oddly satisfying. I
            think in a way, I'm kind of like those web pages; I'm moldable, but
            I still keep my creative flair intact. Apart from work I love
            graphic designing, singing, blogging, and learning new skills. I am
            a highly grounded person that values culture and people. Want to
            know more?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
