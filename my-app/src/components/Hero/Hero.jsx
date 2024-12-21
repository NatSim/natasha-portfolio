import styles from "./Hero.module.css";
import { Link } from "@mui/material";
//logos
import heroImg from "../../assets/hero-image-crop.png";
import webSunny from "../../assets/wb_sunny_dark_mode_large.png";
import webMoon from "../../assets/dark_mode_moon.png";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

//react
import { useTheme } from "../../common/ThemeContext";
import { grey } from "@mui/material/colors";

const lightModeColor = grey[900];

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? webSunny : webMoon;

  //   Icons
  const twitterIcon =
    theme === "light" ? (
      <Link className={styles.twitter} href='https://twitter.com/tasha_simone5'>
        <XIcon alt='' color={lightModeColor}></XIcon>
      </Link>
    ) : (
      <Link className={styles.twitter} href='https://twitter.com/tasha_simone5'>
        <XIcon alt='' sx={{ ...{ filter: "invert(1)" } }}></XIcon>
      </Link>
    );
  const githubIcon =
    theme === "light" ? (
      <Link className={styles.github} href='https://github.com/NatSim'>
        <GitHubIcon alt=''></GitHubIcon>
      </Link>
    ) : (
      <Link className={styles.github} href='https://github.com/NatSim'>
        <GitHubIcon alt='' sx={{ ...{ filter: "invert(1)" } }}></GitHubIcon>
      </Link>
    );
  const linkedinIcon =
    theme === "light" ? (
      <Link
        className={styles.linkedin}
        href='https://www.linkedin.com/in/natasha-simone-14310364'
      >
        {" "}
        <LinkedInIcon alt={"linkedin icon"}></LinkedInIcon>
      </Link>
    ) : (
      <Link
        className={styles.linkedin}
        href='https://www.linkedin.com/in/natasha-simone-14310364'
      >
        {" "}
        <LinkedInIcon
          alt={"linkedin icon"}
          sx={{ ...{ filter: "invert(1)" } }}
        ></LinkedInIcon>
      </Link>
    );
  return (
    <>
      {/* Section 1 */}
      <section className={styles.container}>
        {/* Website Mode Dark/Light */}
        <div>
          <img className={styles.hero} src={heroImg} alt='' />{" "}
          <div className={`${styles.clickableIcon}`}>
            <img
              className={`${styles.colorMode} ${styles.newClass}`}
              src={themeIcon}
              alt={"mode icon"}
              onClick={toggleTheme}
            />
          </div>
        </div>{" "}
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
        </div>
      </section>
    </>
  );
}

export default Hero;
