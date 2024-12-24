import styles from "./Portfolio.module.css";
import justSoYouKnow from "../../assets/just_so_you_know.png";
import Image from "../Image/Image";

const Portfolio = () => {
  const ntwImageItem = {
    href: "https://www.gotellthebees.org/",
    src: "https://www.gotellthebees.org/static/media/GTTB_Logo.16688c23.jpg",
    alt: "",
  };
  const justSoImageItem = {
    href: "",
    src: justSoYouKnow,
    alt: "",
  };

  console.info("ntwImage", ntwImageItem.href);

  return (
    <>
      <section>
        <div className={styles.portfolioContainer}>
          <div className={styles.headingContainer}>
            <h2>Portfolio</h2>
            <div className={styles.sitesContainer}>
              <div className={styles.logoContainer}>
                <p>NTW responsive website-React</p>
                <Image
                  className={styles.ctaImage}
                  href={ntwImageItem.href}
                  src={ntwImageItem.src}
                  alt=''
                />
              </div>
              <div>
                <p>Just so you know responsive website-React</p>
                <Image
                  className={styles.justSoYouKnow}
                  href={justSoImageItem.href}
                  src={justSoImageItem.src}
                />
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
