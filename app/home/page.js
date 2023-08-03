'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import styles from '../home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faLanguage, faDesktop } from '@fortawesome/free-solid-svg-icons';

const profilePicture= '../Hawa.png'
const Home = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    if (selectedSkill === skill) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <img src={profilePicture} alt="Profile" className={styles.profilePicture} />
        </div>
        <div className={styles.rightSection}>
          <div className={styles.rightTop}>
            <p className={styles.nom}>Hawa Farota</p>
            <div className={styles.description}>
              Bienvenue sur mon portfolio !
            </div>
            <p className={styles.para}>
              Je suis une personne dynamique et extrêmement motivée pour développer constamment mes compétences et évoluer professionnellement. Je suis capable de résoudre différents problèmes, j’ai l’esprit d’équipe, le sens de l’organisation et d’excellentes capacités de réflexion stratégique.
            </p>
          </div>
          <div className={styles.rightBottom}>
            <div className={`${styles.des} ${styles.skillsSection}`}>
              Mes compétences
            </div>
            <div className={styles.skills}>
              <div
                className={`${styles.skill} ${selectedSkill === 'programming' ? styles.selected : ''}`}
                onClick={() => handleSkillClick('programming')}
              >
                <FontAwesomeIcon icon={faCode} className={styles.icon} />
                <p className={styles.skillTitle}>Programmation</p>
                {selectedSkill === 'programming' && (
                  <div className={styles.skillContent}>
                    Java, HTML-CSS, C#, Node.js, JavaScript, React.js
                  </div>
                )}
              </div>
              <div
                className={`${styles.skill} ${selectedSkill === 'database' ? styles.selected : ''}`}
                onClick={() => handleSkillClick('database')}
              >
                <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
                <p className={styles.skillTitle}>Bases de données</p>
                {selectedSkill === 'database' && (
                  <div className={styles.skillContent}>
                    SQL, MongoDB, Cassandra
                  </div>
                )}
              </div>
              <div
                className={`${styles.skill} ${selectedSkill === 'languages' ? styles.selected : ''}`}
                onClick={() => handleSkillClick('languages')}
              >
                <FontAwesomeIcon icon={faLanguage} className={styles.icon} />
                <p className={styles.skillTitle}>Langues</p>
                {selectedSkill === 'languages' && (
                  <div className={styles.skillContent}>
                    Français, Anglais
                  </div>
                )}
              </div>
              <div
                className={`${styles.skill} ${selectedSkill === 'os' ? styles.selected : ''}`}
                onClick={() => handleSkillClick('os')}
              >
                <FontAwesomeIcon icon={faDesktop} className={styles.icon} />
                <p className={styles.skillTitle}>Systèmes d'exploitation</p>
                {selectedSkill === 'os' && (
                  <div className={styles.skillContent}>
                    Windows, Linux
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
