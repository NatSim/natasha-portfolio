import styles from "./Hero.module.css";
//logos
import heroImg from "../../assets/hero-image-crop.png";
import webSunny from "../../assets/wb_sunny.png";
import webMoon from "../../assets/dark_mode_moon.png";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

//react
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? webSunny : webMoon;

  //   Icons
  const twitterIcon =
    theme === "light" ? (
      <XIcon
        className={styles.twitter}
        href='https://twitter.com/tasha_simone5'
        alt=''
      ></XIcon>
    ) : (
      <XIcon
        href='https://twitter.com/tasha_simone5'
        alt=''
        className={styles.twitter}
        sx={{ ...{ filter: "invert(1)" } }}
      ></XIcon>
    );
  const githubIcon =
    theme === "light" ? (
      <GitHubIcon
        className={styles.github}
        href='https://github.com/NatSim'
        alt=''
      ></GitHubIcon>
    ) : (
      <GitHubIcon
        className={styles.github}
        href='https://github.com/NatSim'
        alt=''
        sx={{ ...{ filter: "invert(1)" } }}
      ></GitHubIcon>
    );
  const linkedinIcon =
    theme === "light" ? (
      <LinkedInIcon
        className={styles.linkedin}
        alt={"linkedin icon"}
      ></LinkedInIcon>
    ) : (
      <LinkedInIcon
        className={styles.linkedin}
        alt={"linkedin icon"}
        sx={{ ...{ filter: "invert(1)" } }}
      ></LinkedInIcon>
    );
  return (
    <>
      <section className={styles.container}>
        {/* Website Mode Dark/Light */}
        <div>
          <img className={styles.hero} src={heroImg} alt='' />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt={"mode icon"}
            onClick={toggleTheme}
          />
        </div>
      </section>
      {/* Intro */}
      <div className={styles.info}>
        <h1>
          Natasha <br />
          Simone
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          {/* Twitter */}
          {twitterIcon}
          {/* Github */}
          {githubIcon}
          {/* Linkedin */}
          {linkedinIcon}
        </span>
        <p>Creativity is intelligence having fun ~ anonymous</p>
        <a>
          <button className='hover' download>
            CV
          </button>
        </a>
      </div>
    </>
  );
}

export default Hero;
