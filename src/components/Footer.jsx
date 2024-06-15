import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Kalpesh Chavada</h4>
      <h4>Copyright &copy; 2024 KC</h4>
      <div className="footerLinks">
        <a href="https://github.com/Kalpesh446" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kalpesh-chavada-1a90361ba/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:kalpeshchavda446@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
