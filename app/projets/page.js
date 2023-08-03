'use client';
import React from 'react';
import styles from './projet1.css'; 

const photo= '../calculatrice.png'

function Projet() {
  const title = "Calculatrice";
  const description = "Le projet consiste à effectuer des calculs numériques tels que l'addition, la soustraction, la multiplication, la division, le calcul des pourcentages, le modulo et a afficher la solution.";

  return (
    <div className={styles.container} >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.imageContainer}>
        <img src={photo} alt='Photo' className={styles.photo} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.subtitle}>Description du projet</h3>
        <p className={styles.description}>
          {description}
        </p>
      </div>
      <br style={{marginBottom:"50px"}}/>
    </div>
  );
}

export default Projet;
