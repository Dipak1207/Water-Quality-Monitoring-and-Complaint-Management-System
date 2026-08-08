import React, { useState } from 'react';
import { createFeedback } from '../api';

const styles = {
  page: {
    backgroundColor: '#f0f2f5',
    padding: '20px',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '650px',
    margin: '20px auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '15px',
    color: '#666',
    textAlign: 'center',
    marginBottom: '25px',
  },
  formGroup: {
    marginBottom: '18px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#444',
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '15px',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '15px',
    minHeight: '110px',
    boxSizing: 'border-box',
    resize: 'vertical',
  },
  ratingRow: {
    display: 'flex',
    gap: '8px',
    fontSize: '28px',
    cursor: 'pointer',
  },
  star: {
    color: '#ddd',
    transition: 'color 0.2s',
  },
  starActive: {
    color: '#ffc107',
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  successMsg: {
    marginTop: '20px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#d4edda',
    color: '#155724',
    textAlign: 'center',
  },
  errorMsg: {
    marginTop: '20px',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    textAlign: 'center',
  },
};

export default function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [rating, setRating] = useState(0);
  const [submitState, setSubmitState] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createFeedback({ ...form, rating });
      setSubmitState('success');
      setForm({ name: '', email: '', message: '' });
      setRating(0);
    } catch (err) {
      setSubmitState('error');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Share Your Feedback</h1>
        <p style={styles.subtitle}>Help us improve the Water Quality Monitoring platform.</p>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input style={styles.input} type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input style={styles.input} type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Rating</label>
            <div style={styles.ratingRow}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={star <= rating ? { ...styles.star, ...styles.starActive } : styles.star}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Message</label>
            <textarea style={styles.textarea} name="message" value={form.message} onChange={handleChange} required />
          </div>
          <button style={styles.button} type="submit">Submit Feedback</button>
        </form>

        {submitState === 'success' && <div style={styles.successMsg}>Thank you! Your feedback has been submitted.</div>}
        {submitState === 'error' && <div style={styles.errorMsg}>Could not reach the server. Please make sure the backend is running.</div>}
      </div>
    </div>
  );
}
