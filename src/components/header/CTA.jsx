import CV from "../../assets/keshav-chaudhary-resume.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV}
        download
        className="btn"
        without
        rel="noopener noreferrer"
        target="_blank"
      >
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};
