'use client'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './header.module.css';

function Header() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.container}`}>
      <div className="container">
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className={`navbar-nav ${styles.menu}`}>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link href="/home">Home</Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link href="/projets">Projet1</Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link href="/projets2">Projet2</Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link href="/testimonial">Témoignages</Link>
            </li>
            <li className={`nav-item ${styles.menuItem}`}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
