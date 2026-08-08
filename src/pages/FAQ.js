import React, { useState } from 'react';

const styles = {
  page: {
    backgroundColor: '#f0f2f5',
    padding: '20px',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
    textAlign: 'center',
  },
  item: {
    borderBottom: '1px solid #eee',
  },
  question: {
    width: '100%',
    textAlign: 'left',
    background: 'none',
    border: 'none',
    padding: '18px 5px',
    fontSize: '17px',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  answer: {
    padding: '0 5px 18px 5px',
    fontSize: '15px',
    color: '#555',
    lineHeight: '1.6',
  },
  icon: {
    fontSize: '18px',
    color: '#007bff',
    transition: 'transform 0.2s',
  },
};

const faqs = [
  {
    q: 'How do I raise a complaint about water quality?',
    a: 'Go to the "Raise Complaint" page from the navigation bar, fill in your name, address, zone, complaint type and contact details, then submit. Your complaint is logged and can be tracked by the admin team.',
  },
  {
    q: 'What is the Water Quality Self-Test tool?',
    a: 'It lets you enter readings such as pH, TDS, turbidity and temperature to instantly get an estimated Safe / Moderate / Unsafe status based on standard drinking water guidelines.',
  },
  {
    q: 'Who can access the Admin Panel?',
    a: 'The Admin Panel is restricted to authorized personnel who log in via the Admin/Login page. It allows managing users and reviewing submitted complaints and reports.',
  },
  {
    q: 'Is my personal information safe?',
    a: 'Yes. Information submitted through complaints or feedback forms is only used to address your concern and is not shared with third parties.',
  },
  {
    q: 'How often is the dashboard data updated?',
    a: 'The dashboard summarizes recent readings and complaint trends. In a production deployment this would refresh automatically as new sensor data and complaints come in.',
  },
  {
    q: 'Who built this project?',
    a: 'This platform was developed by Dipak Rathod as a final year project at PREC (Pravara Rural Engineering College).',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Frequently Asked Questions</h1>
        {faqs.map((item, i) => (
          <div style={styles.item} key={i}>
            <button style={styles.question} onClick={() => toggle(i)}>
              <span>{item.q}</span>
              <span style={{ ...styles.icon, transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
            </button>
            {openIndex === i && <div style={styles.answer}>{item.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
