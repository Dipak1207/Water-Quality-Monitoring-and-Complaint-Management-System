import React from 'react';

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
  card: {
    display: 'flex',
    gap: '15px',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '15px',
    alignItems: 'flex-start',
  },
  iconWrap: {
    fontSize: '22px',
    width: '36px',
    textAlign: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '4px',
  },
  cardText: {
    fontSize: '14px',
    color: '#555',
  },
  cardTime: {
    fontSize: '12px',
    color: '#888',
    marginTop: '6px',
  },
};

const severityStyles = {
  danger: { backgroundColor: '#fdecea', color: '#c0392b', icon: '⚠️' },
  warning: { backgroundColor: '#fff8e1', color: '#b8860b', icon: '⚠️' },
  info: { backgroundColor: '#e8f4fd', color: '#0b6fa4', icon: 'ℹ️' },
  success: { backgroundColor: '#e9f7ef', color: '#1e8449', icon: '✅' },
};

const notifications = [
  {
    severity: 'danger',
    title: 'High Turbidity Alert — Zone D',
    text: 'Turbidity readings exceeded 8 NTU. Residents are advised to boil water before use until further notice.',
    time: '2 hours ago',
  },
  {
    severity: 'warning',
    title: 'Scheduled Maintenance — Zone B',
    text: 'Pipeline maintenance is scheduled for tomorrow 9 AM–1 PM. Minor supply interruptions expected.',
    time: '6 hours ago',
  },
  {
    severity: 'info',
    title: 'New Feature: Water Self-Test Tool',
    text: 'You can now check your water quality instantly using the new Water Test module.',
    time: '1 day ago',
  },
  {
    severity: 'success',
    title: 'Zone A Water Quality Restored',
    text: 'Following recent complaints, water quality in Zone A has returned to safe levels.',
    time: '3 days ago',
  },
];

export default function Notifications() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Alerts & Notifications</h1>
        {notifications.map((n, i) => {
          const s = severityStyles[n.severity];
          return (
            <div key={i} style={{ ...styles.card, backgroundColor: s.backgroundColor }}>
              <div style={{ ...styles.iconWrap, color: s.color }}>{s.icon}</div>
              <div>
                <div style={{ ...styles.cardTitle, color: s.color }}>{n.title}</div>
                <div style={styles.cardText}>{n.text}</div>
                <div style={styles.cardTime}>{n.time}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
