import React from 'react';
import styles from '../styles/Footer.module.css'; // Update the path based on your project structure

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
