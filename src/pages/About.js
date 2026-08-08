import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

const styles = {
  page: {
    backgroundColor: '#f0f2f5',
    padding: '20px',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '950px',
    margin: '20px auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
    textAlign: 'center',
  },
  content: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '20px',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginTop: '20px',
    marginBottom: '50px',
  },
  featureCard: {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f8f9fb',
    border: '1px solid #eaeaea',
    textAlign: 'center',
  },
  featureIcon: {
    fontSize: '28px',
    color: '#007bff',
    marginBottom: '10px',
  },
  featureTitle: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#333',
    marginBottom: '6px',
  },
  featureText: {
    fontSize: '14px',
    color: '#666',
  },
  devSection: {
    marginTop: '20px',
    textAlign: 'center',
  },
  developerCard: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px auto',
    padding: '30px 40px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #007bff 0%, #0b3d91 100%)',
    color: '#fff',
    boxShadow: '0 8px 18px rgba(0,0,0,0.15)',
  },
  developerImage: {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    marginBottom: '18px',
    border: '4px solid #fff',
    objectFit: 'cover',
  },
  developerName: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '6px',
  },
  developerRole: {
    fontSize: '15px',
    marginBottom: '4px',
    opacity: 0.95,
  },
  developerCollege: {
    fontSize: '15px',
    marginBottom: '16px',
    opacity: 0.95,
    fontWeight: '600',
  },
  socialMediaLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '18px',
  },
  socialMediaIcon: {
    fontSize: '22px',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop: '10px',
    marginBottom: '10px',
    color: '#333',
    textAlign: 'center',
  },
};

const features = [
  { icon: 'fa-solid fa-flask', title: 'Water Quality Testing', text: 'Log and evaluate pH, TDS, turbidity and temperature readings instantly.' },
  { icon: 'fa-solid fa-chart-line', title: 'Analytics Dashboard', text: 'Visual trends and quality distribution powered by interactive charts.' },
  { icon: 'fa-solid fa-triangle-exclamation', title: 'Complaint Management', text: 'Citizens can raise and track water quality complaints in their zone.' },
  { icon: 'fa-solid fa-bell', title: 'Alerts & Notifications', text: 'Stay informed about water advisories and quality alerts near you.' },
  { icon: 'fa-solid fa-comment-dots', title: 'Feedback System', text: 'Collect public feedback to continuously improve civic water services.' },
  { icon: 'fa-solid fa-user-shield', title: 'Admin Panel', text: 'Authorities can manage users, complaints and reports in one place.' },
];

function About() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>About the Project</h1>
        <div style={styles.content}>
          <p>
            Water Quality Monitoring (WQM) is a full-stack civic-tech platform built to help communities track,
            report and understand the quality of their water. It combines a real-time complaint management
            system, a water quality self-testing tool, an analytics dashboard and public awareness resources
            into a single, easy-to-use application.
          </p>
          <p>
            The platform is aligned with Sustainable Development Goal 6 (SDG 6) — Clean Water and Sanitation —
            and aims to bridge the gap between citizens and local water authorities by making it simple to
            report issues, monitor trends and stay informed.
          </p>
        </div>

        <h2 style={styles.sectionTitle}>Key Features</h2>
        <div style={styles.featureGrid}>
          {features.map((f, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={styles.featureIcon}><i className={f.icon}></i></div>
              <div style={styles.featureTitle}>{f.title}</div>
              <div style={styles.featureText}>{f.text}</div>
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>Developed By</h2>
        <div style={styles.devSection}>
          <div style={styles.developerCard}>
            <img src="images/dipak.png" alt="Dipak Rathod" style={styles.developerImage} />
            <div style={styles.developerName}>Dipak Rathod</div>
            <div style={styles.developerRole}>Final Year Student &middot; Developer</div>
            <div style={styles.developerCollege}>PREC (Pravara Rural Engineering College)</div>
            <div style={styles.socialMediaLinks}>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" style={styles.socialMediaIcon}></i>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" style={styles.socialMediaIcon}></i>
              </a>
              <a href="mailto:dipak.rathod@example.com">
                <i className="fa-solid fa-envelope" style={styles.socialMediaIcon}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
