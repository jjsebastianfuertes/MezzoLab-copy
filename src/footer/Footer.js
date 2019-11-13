import React from 'react';
import styles from './footer-styles.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <h3 className={styles.logoTitle}> © MezzoLab 2019</h3>
      <div className={styles.footerContainerLinks}>
        <a href="#">
          <h2>Work</h2>
        </a>
        <a href="#">
          <h2>Blog</h2>
        </a>
        <a href="#">
          <h2>Contact</h2>
        </a>
      </div>
    </div>
  );
};

export default Footer;
