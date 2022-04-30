import { CTA } from "./CTA";
import ME from "../../assets/me.png";
import "./header.css";
import { HeaderSocial } from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h3>
          Hello <span className="wave">👋 </span> I'm
        </h3>
        <h1>Keshav Chaudhary</h1>
        <h5>FULL STACK WEB DEVELOPER</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
}

export default Header;
