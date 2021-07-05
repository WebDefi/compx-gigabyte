import React from "react";
import footerBg from "../../static/images/footerBg.png"
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div style={{height:300,backgroundImage: `url(${footerBg})`}}></div>
      <div className={styles.Footer}>
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Footer;
