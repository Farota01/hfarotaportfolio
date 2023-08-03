'use client'
import React, { useState } from 'react';
import styles from '../../styles/Contact.module.css';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setNameError('Le nom ne peut pas être vide.');
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError("L'email ne peut pas être vide.");
    } else {
      setEmailError('');
    }

    if (name.trim() !== '' && email.trim() !== '') {
      alert('Message envoyé');
      setName('');
      setEmail('');
      setMessage('');
      // Rediriger vers la page d'accueil
      window.location.replace('../home');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h2>Contactez-moi</h2>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <label className={styles.label} htmlFor="name">Nom :</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {nameError && <p className={styles.errorMessage}>{nameError}</p>}

        <label className={styles.label} htmlFor="email">Email :</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {emailError && <p className={styles.errorMessage}>{emailError}</p>}

        <label className={styles.label} htmlFor="message">Message :</label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
        />

        <button type="submit" className={styles.submitButton}>
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
