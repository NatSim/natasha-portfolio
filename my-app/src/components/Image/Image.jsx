import React from "react";
import styles from "./Image.module.css";

// interface SiteImageProps {
//   href: string;
//   src: string;
//   alt?: string;
// }

const Image = ({ href, src, alt = "" }) => (
  <a href={href}>
    <img className={styles.ctaImage} src={src} alt={alt} />
  </a>
);

export default Image;
