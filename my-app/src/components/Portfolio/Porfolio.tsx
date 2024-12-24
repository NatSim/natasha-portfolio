import styles from "./Portfolio.module.css";
// import justSoYouKnow from '../../assets/just_so_you_know.png'
import Image  from "../Image/Image";


const Portfolio = () => {
  const ntwImageArray = [
    {
      href: "https://www.gotellthebees.org/",
      src: "https://www.gotellthebees.org/static/media/GTTB_Logo.16688c23.jpg",
      alt: "",
    },
    { href: "", src: '', alt: "" },
  ];

  ntwImageArray.map((item) => {
    console.info("item", item);
    return item;
  });

  console.info("ntwArray", ntwImageArray);

  return (
    <>
      <section>
        <div className={styles.portfolioContainer}>
          <div className={styles.headingContainer}>
            <h2>Portfolio</h2>
            <div className={styles.sitesContainer}>
              <div className={styles.logoContainer}>
                <p>NTW responsive website-React</p>
                {/* <Image src={''} /> */}
              </div>
              <div>
                <p>Just so you know responsive website-React</p>
                {/* <Image /> */}
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
