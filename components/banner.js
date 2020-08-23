import classes from "../styles/index.module.css";
import Typed from "react-typed";
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Banner = (props) => {
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
        <div className={classes.iconDiv}><FaEnvelope /></div>
        <div className={classes.iconDiv}><FaLinkedinIn /></div>
        <div className={classes.iconDiv}><FaGithub /></div>
      </div>
    </div>
  );
};

export default Banner