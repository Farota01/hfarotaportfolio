'use client'
import React, { useState } from 'react';
import styles from '../../styles/Testimonial.module.css';

const initialTestimonials = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    comment: 'Great service, highly recommended!',
    date: new Date(),
  },
  // Ajoutez d'autres témoignages ici
];

function TestimonialPage() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [editedComment, setEditedComment] = useState('');

  const addTestimonial = () => {
    if (newComment.trim() === '') {
      return; // Ne pas ajouter de témoignage vide
    }

    const newTestimonial = {
      id: testimonials.length + 1,
      name: 'Jane Doe',
      comment: newComment,
      rating: newRating,
      date: new Date(),
    };

    setTestimonials([...testimonials, newTestimonial]);
    setNewComment('');
    setNewRating(5);
  };

  const deleteTestimonial = (id) => {
    const updatedTestimonials = testimonials.filter((testimonial) => testimonial.id !== id);
    setTestimonials(updatedTestimonials);
    setEditingTestimonial(null);
  };

  const startEditing = (id, comment) => {
    setEditingTestimonial(id);
    setEditedComment(comment);
  };

  const saveEditedTestimonial = (id) => {
    const updatedTestimonials = testimonials.map((testimonial) => {
      if (testimonial.id === id) {
        return { ...testimonial, comment: editedComment };
      }
      return testimonial;
    });
    setTestimonials(updatedTestimonials);
    setEditingTestimonial(null);
    setEditedComment('');
  };

  return (
    <div className={styles.testimonialContainer}>
      <h2>Témoignages</h2>
      <div className={styles.addForm}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Entrez votre témoignage"
          rows={4}
        />
        <select value={newRating} onChange={(e) => setNewRating(Number(e.target.value))}>
          <option value={1}>1 étoile</option>
          <option value={2}>2 étoiles</option>
          <option value={3}>3 étoiles</option>
          <option value={4}>4 étoiles</option>
          <option value={5}>5 étoiles</option>
        </select>
        <button className={styles.addButton} onClick={addTestimonial}>
          Ajouter Témoignage
        </button>
      </div>
      {testimonials.length > 0 ? (
        <ul className={styles.testimonialList}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className={styles.testimonialItem}>
              <div className={styles.testimonialInfo}>
                <span className={styles.testimonialDate}>
                  {testimonial.date.toLocaleDateString()}
                </span>
                <span className={styles.testimonialName}>{testimonial.name}</span>
                <span className={styles.testimonialRating}>
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </span>
              </div>
              {editingTestimonial === testimonial.id ? (
                <div className={styles.editDeleteButtons}>
                  <textarea
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                  />
                  <button onClick={() => saveEditedTestimonial(testimonial.id)}>
                    Sauvegarder
                  </button>
                  <button onClick={() => setEditingTestimonial(null)}>Annuler</button>
                </div>
              ) : (
                <>
                  <p className={styles.testimonialComment}>{testimonial.comment}</p>
                  <div className={styles.editDeleteButtons}>
                    <button onClick={() => startEditing(testimonial.id, testimonial.comment)}>Modifier</button>
                    <button onClick={() => deleteTestimonial(testimonial.id)}>Supprimer</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun témoignage disponible.</p>
      )}
    </div>
  );
}

export default TestimonialPage;
