import styles from "./Portfolio.module.css";
import justSoYouKnow from "../../assets/just_so_you_know.png";

const SiteImage = () => (
  <a href='https://www.gotellthebees.org/'>
    <img
      className={styles.ctaImage}
      src='https://www.gotellthebees.org/static/media/GTTB_Logo.16688c23.jpg'
      alt=''
    ></img>
  </a>
);

const Site2Image = () => (
  <a href=''>
    <img className={styles.ctaImage} src={justSoYouKnow} alt=''></img>
  </a>
);

const Portfolio = () => {
  return (
    <>
      <section>
        <div className={styles.portfolioContainer}>
          <div className={styles.headingContainer}>
            <h2>Portfolio</h2>
            <div className={styles.sitesContainer}>
              <div>
                <p>NTW responsive website-React</p>
                <SiteImage />
              </div>
              <div>
                <p>Just so you know responsive website-React</p>
                <Site2Image />
              </div>
              <div>
                <p>Book responsive app-JS</p>
              </div>
              <div>
                <p>Quiz-JS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
