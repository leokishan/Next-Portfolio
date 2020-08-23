import classes from "../styles/index.module.css";
import Typed from "react-typed";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaFilePdf } from "react-icons/fa";

const Banner = (props) => {
  const goToGit = () => {
    window.open("https://github.com/leokishan");
  };

  const goToLinked = () => {
    window.open("https://www.linkedin.com/in/kishan-thakkar-92b050151");
  };

  const downloadResume = () => {
		window.open('/resume.pdf');
	};

  return (
    <div className={classes.banner}>
      <div className={classes.bannerOverlay} />
      <div className={classes.bannerText}>
        <p>Hello,</p>
        <p>
          I'm&ensp;
          <span className={classes.nameText}>Kishan Thakkar</span>
        </p>
        <p>
          A&ensp;
          <Typed
            strings={[
              "Web Developer",
              "Fullstack Developer",
              "MERN Stack Developer",
            ]}
            typeSpeed={50}
            backSpeed={50}
            loop
            backDelay={2000}
          />
          .
        </p>
      </div>
      <div className={classes.iconContainer}>
        <div className={classes.iconDiv}>
          <a href="mailto:thakkarkishan097@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <div className={classes.iconDiv} onClick={downloadResume}>
          <FaFilePdf />
        </div>
        <div className={classes.iconDiv} onClick={goToLinked}>
          <FaLinkedinIn />
        </div>
        <div className={classes.iconDiv} onClick={goToGit}>
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Banner;
