import React, { useState } from 'react';
import { createWaterTestReport } from '../api';

const styles = {
  page: {
    backgroundColor: '#f0f2f5',
    padding: '20px',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '700px',
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
  resultBox: {
    marginTop: '25px',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  resultTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  resultNotes: {
    fontSize: '14px',
    color: '#555',
    textAlign: 'left',
    marginTop: '10px',
  },
  statusMsg: {
    fontSize: '13px',
    marginTop: '12px',
    textAlign: 'center',
  },
};

// Simple rule-based evaluation (WHO / BIS indicative safe ranges) used for demo purposes.
function evaluateWaterQuality({ ph, tds, turbidity, temperature }) {
  const issues = [];
  let score = 100;

  if (ph < 6.5 || ph > 8.5) {
    issues.push(`pH (${ph}) is outside the safe drinking range of 6.5–8.5.`);
    score -= 30;
  }
  if (tds > 500) {
    issues.push(`TDS (${tds} ppm) exceeds the recommended limit of 500 ppm.`);
    score -= 25;
  }
  if (turbidity > 5) {
    issues.push(`Turbidity (${turbidity} NTU) exceeds the recommended limit of 5 NTU.`);
    score -= 25;
  }
  if (temperature < 0 || temperature > 40) {
    issues.push(`Temperature (${temperature}°C) is unusually high/low.`);
    score -= 10;
  }

  let status = 'Safe';
  let color = '#28a745';
  if (score < 60) {
    status = 'Unsafe';
    color = '#dc3545';
  } else if (score < 85) {
    status = 'Moderate';
    color = '#ffc107';
  }

  return { status, color, score: Math.max(score, 0), issues };
}

export default function WaterTest() {
  const [form, setForm] = useState({ ph: '', tds: '', turbidity: '', temperature: '', location: '' });
  const [result, setResult] = useState(null);
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsed = {
      ph: parseFloat(form.ph),
      tds: parseFloat(form.tds),
      turbidity: parseFloat(form.turbidity),
      temperature: parseFloat(form.temperature),
    };

    if (Object.values(parsed).some((v) => Number.isNaN(v))) {
      setStatusMsg('Please fill in all fields with valid numbers.');
      return;
    }

    const evaluation = evaluateWaterQuality(parsed);
    setResult(evaluation);
    setStatusMsg('');

    try {
      await createWaterTestReport({
        location: form.location || 'Unspecified',
        ph: parsed.ph,
        tds: parsed.tds,
        turbidity: parsed.turbidity,
        temperature: parsed.temperature,
        status: evaluation.status,
      });
      setStatusMsg('✔ Report saved to server.');
    } catch (err) {
      setStatusMsg('Note: could not reach backend, showing local result only.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Water Quality Self-Test</h1>
        <p style={styles.subtitle}>Enter your readings below to instantly check whether the water is safe to use.</p>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Location / Zone</label>
            <input style={styles.input} type="text" name="location" placeholder="e.g. Zone B, Main Street" value={form.location} onChange={handleChange} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>pH Level (0–14)</label>
            <input style={styles.input} type="number" step="0.1" name="ph" placeholder="e.g. 7.2" value={form.ph} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>TDS (ppm)</label>
            <input style={styles.input} type="number" step="1" name="tds" placeholder="e.g. 320" value={form.tds} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Turbidity (NTU)</label>
            <input style={styles.input} type="number" step="0.1" name="turbidity" placeholder="e.g. 2.5" value={form.turbidity} onChange={handleChange} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Temperature (°C)</label>
            <input style={styles.input} type="number" step="0.1" name="temperature" placeholder="e.g. 25" value={form.temperature} onChange={handleChange} required />
          </div>
          <button style={styles.button} type="submit">Check Water Quality</button>
        </form>

        {statusMsg && <div style={styles.statusMsg}>{statusMsg}</div>}

        {result && (
          <div style={{ ...styles.resultBox, backgroundColor: `${result.color}1A`, border: `2px solid ${result.color}` }}>
            <div style={{ ...styles.resultTitle, color: result.color }}>{result.status} — Score: {result.score}/100</div>
            {result.issues.length === 0 ? (
              <p>All readings are within safe limits. Good to use!</p>
            ) : (
              <div style={styles.resultNotes}>
                <strong>Issues detected:</strong>
                <ul>
                  {result.issues.map((issue, idx) => (
                    <li key={idx}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
