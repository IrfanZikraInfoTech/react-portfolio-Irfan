import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="felx flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-24" />
      </div>
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/irfan-khan-a51281213"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/IrfanKhan3006"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/itz_officials_irfankhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
