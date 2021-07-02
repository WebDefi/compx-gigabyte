import React from 'react';
import logo from '../../static/images/logo.svg'
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <div className={styles.headerInfo}>
        <ul style={{display:'flex',justifyContent:"space-around"}}>
          <li>
            <a href="#">Акции</a>
          </li>
          <li>
            <a href="#">Оплата</a>
          </li>
          <li>
            <a href="#">Some</a>
          </li>
        </ul>
      </div>
      <div className={styles.headerTop}>
        <div className={styles.autoContainer}>
          <div className={styles.topLeft}><p>asdasd</p></div>
          <div className={styles.topRight}><p>asdasd</p></div>
        </div>
      </div>
      <div className={styles.headerUpper}>
        <div className={styles.innerContainer}>
          <div className={styles.autoContainer}>
            <div className={styles.logoOuter}>
              <div className={styles.logo}>
                <a href="#">
                  <img src={logo} />
                </a>
              </div>
            </div>
            <div className={styles.navOuter}></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;