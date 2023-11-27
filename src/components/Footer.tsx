import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footers = () => {
  return (
    <div className="flex flex-col p-6 text-white bg-primary">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="p-2 text-lg font-bold">Pulak Sarmah</h2>
          <p className="p-1 text-sm">Web Developer</p>
          <p className="p-1 text-sm">pulaksarmah333@gmail.com</p>
          <p className="p-1 text-sm">+91-9957849950</p>
        </div>
        <div className="flex mt-4 space-x-4 md:mt-0">
          <a href="https://github.com/pulak-sarmah" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "#ffffff" }}
            />
            <span className="sr-only">Github</span>
          </a>
          <a href="https://www.linkedin.com/in/pulak-sarmah/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "#ffffff" }}
            />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/pulak__sarmah/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              style={{ color: "#ffffff" }}
            />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="http://pulaksarmah.in/" target="_blank">
            <FontAwesomeIcon
              icon={faCircleInfo}
              size="xl"
              style={{ color: "#ffffff" }}
            />
            <span className="sr-only">Portfolio</span>
          </a>
        </div>
      </div>
      <div className="mt-6 text-sm text-center">
        <p>© Pulak Sarmah. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footers;
