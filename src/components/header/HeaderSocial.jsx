import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const HeaderSocial = () => {
  return (
    <div>
      <div className="header__socials">
        <a
          href="https://linkedin.com/keshav-k-chaudhary/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/imkeshav98"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
