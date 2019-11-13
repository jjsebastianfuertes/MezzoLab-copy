import React from 'react';
import styles from './header-styles.module.css';

const Header = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerLogo}>MezzoLabCopy</h1>
        <div className={styles.headerContainerLinks}>
          <a href="#">
            <h2 className={styles.headerLinks}>Works</h2>
          </a>
          <a href="#">
            <h2 className={styles.headerLinks}> Contact</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
