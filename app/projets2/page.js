'use client';
import React from 'react';
import styles from './projet1.css'; 

const photo= '../second.png'

function Projet() {
  
  
    const title = "Plateforme d'annuaire";
    const description = "Le Développement d’un répertoire en ligne détaillé (adresse, site web, Faq et option de notation de la qualité de service, redirection vers le site internet de l’entrepreneur) et convivial qui répertorie les entrepreneurs locaux en fonction de leurs domaines d’expertise. En gros ce répertoire fournit les coordonnées physiques et numériques de ces entrepreneurs. Cette application permet de faciliter la recherche et la mise en relation entre les entrepreneurs et les clients potentiels. Encourager le développement économique en promouvant les échanges commerciaux locaux et stimulant la croissance des entreprises. Servir de plateforme d’information qui sert de visibilité aux entreprises qui souhaitent partager leur succès stories, leur expérience et leur conseil à travers des petites vidéos publicitaires.";
  
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.imageContainer}>
          <img src={photo} alt='Photo' className={styles.photo} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.subtitle}>Description du projet</h3>
          <p className={styles.description}>
            {description}
          </p>
          <br style={{marginBottom:"50px"}}/>
        </div>
      </div>
    );
  }
  
  export default Projet;
  