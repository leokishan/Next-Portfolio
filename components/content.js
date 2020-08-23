import classes from "../styles/content.module.css";
import classnames from "classnames";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const Content = (props) => {
  return (
    <>
      <div className={classes.titleBar} id="menu-bar">
        <div className={classes.title}>About</div>
        <div className={classes.title}>Skills</div>
        <div className={classes.title}>Services</div>
        <div className={classes.title}>Work</div>
        <div className={classes.title}>Contact</div>
      </div>
      <div className={classes.dataContainer}>
        <div className={classes.about} id="about">
          <div>
            <h1 className={classnames(classes.underlineText)}>About Me</h1>
            <div>
              I am Fullstack developer with{" "}
              <span className="orange--text">2 years of experience</span>. I am
              always indulged in exploring emerging fields and Co-oping with
              existing technologies. I like to experiment with different
              technologies and to make something interesting by combining
              things. With being updated to trends I also implement things to
              get something creative and unique out of it.
            </div>
          </div>
          <img src="/self.jpg" alt="Self" className={classes.selfImg} />
        </div>
        <div className={classes.skills} id="skills">
          <div>
            <h1 className={classnames(classes.underlineText)}>Skills</h1>
          </div>
          <div />
          <div>
            <h3>Programming Languages</h3>
            <p className="skills-description">Java, Python, Javascript</p>
          </div>
          <div>
            <h3>Client side frameworks</h3>
            <p className="skills-description">
              ReactJS, Gatsby, Django, Flask, JSP
            </p>
          </div>
          <div>
            <h3>Server side frameworks</h3>
            <p className="skills-description">NodeJS, Spring, Hibernate</p>
          </div>
          <div>
            <h3>Database</h3>
            <p className="skills-description">MYSQL, MongoDB, Cassandra</p>
          </div>
          <div>
            <h3>Python frameworks</h3>
            <p className="skills-description">Django, Flask</p>
          </div>
          <div>
            <h3>Miscellaneous</h3>
            <p className="skills-description">
              GraphQL, PWAs, Sockets, Docker, Firebase
            </p>
          </div>
        </div>
        <div className={classes.services} id="services">
          <h1 className={classnames(classes.underlineText)}>Services</h1>
          <div className={classes.serviceContainer}>
            <div className={classes.serviceCard}>
              <img
                src="/laptop.png"
                alt="Laptop"
                className={classes.serviceIcon}
              />
              <h3>Web Development</h3>
              <p>
                Create websites from designs provided in PSD format or even
                design attractive and catchy website from client requirements.
              </p>
            </div>
            <div className={classes.serviceCard}>
              <img
                src="/mobile.png"
                alt="mobile"
                className={classes.serviceIcon}
              />
              <h3>Responsive</h3>
              <p>
                More than a half of the user traffic comes from smart phones and
                sites must be developed by keeping large audience in mind.
              </p>
            </div>
            <div className={classes.serviceCard}>
              <img
                src="backend.png"
                alt="backend"
                className={classes.serviceIcon}
              />
              <h3>Backend Development</h3>
              <p>
                Backend in technologies such as NodeJS, Python (Django), Java
                (Spring, hibernate) with security concerns and optimum data
                extraction.
              </p>
            </div>
            <div className={classes.serviceCard}>
              <img
                src="database.png"
                alt="database"
                className={classes.serviceIcon}
              />
              <h3>Databases</h3>
              <p>
                Worked with few kind of databases as Relational Database (MySql,
                Postgres) and NoSQL database (MongoDb).
              </p>
            </div>
            <div className={classes.serviceCard}>
              <img src="/more.png" alt="more" className={classes.serviceIcon} />
              <h3>Others</h3>
              <p>
                Also worked on complementary things as PWAs, Service Workers,
                GraphQL and Real Time applications (firebase and socket).
              </p>
            </div>
          </div>
        </div>
        {/* <div className={classes.work} id="work">
          <h1 className={classnames(classes.underlineText)}>Work</h1>
          Work
        </div> */}
        <div className={classes.contact} id="contact">
          <h1 className={classes.centerUnderLine}>
            Let's develop something creative
          </h1>
          <p>
            I'm a freelance developer along with working as a Fullstack
            developer and always eager to work on new and creative ideas. I work
            in a structural and professional manner by following best practices
            and standards. Besides development, also interested in Data Science
            work and looking for opportunity to deep dive into these fields.
          </p>
          <div className={classes.contactForm}>
            <div>
              <form>
                <input required type="text" placeholder="Name" />
                <input required type="email" placeholder="Email" />
                <textarea required placeholder="Message" rows={5} />
                <button className="d-flex" type="submit">
                  SEND MESSAGE&emsp;
                  <FaTelegramPlane style={{ fontSize: "1.3rem" }} />
                </button>
              </form>
            </div>
            <div>
              <h4>Or Reach me</h4>
              <p>Email: thakkarkishan097@gmail.com</p>
              <p>Contact: 7048397250</p>
              <div className="d-flex">
                <div className={classes.socialIcons}>
                  <FaEnvelope />
                </div>
                <div className={classes.socialIcons}>
                  <FaLinkedinIn />
                </div>
                <div className={classes.socialIcons}>
                  <FaGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
