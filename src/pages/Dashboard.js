import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const styles = {
  page: {
    backgroundColor: '#f0f2f5',
    padding: '20px',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1100px',
    margin: '20px auto',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    textAlign: 'center',
    marginBottom: '30px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  },
  statValue: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#007bff',
  },
  statLabel: {
    fontSize: '14px',
    color: '#666',
    marginTop: '6px',
  },
  chartsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
    gap: '20px',
  },
  chartCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  },
  chartTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px',
  },
};

// Mock/demo readings — in production these would come from the backend API.
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const phReadings = [7.1, 6.9, 7.3, 7.0, 6.8, 7.2, 7.4];
const turbidityReadings = [3.2, 4.1, 2.8, 5.0, 3.6, 2.9, 3.1];
const zones = ['Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E'];
const complaintsByZone = [12, 19, 7, 14, 9];

function Dashboard() {
  const lineData = useMemo(() => ({
    labels: days,
    datasets: [
      {
        label: 'pH Level',
        data: phReadings,
        borderColor: '#007bff',
        backgroundColor: 'rgba(0,123,255,0.15)',
        tension: 0.35,
        fill: true,
      },
      {
        label: 'Turbidity (NTU)',
        data: turbidityReadings,
        borderColor: '#28a745',
        backgroundColor: 'rgba(40,167,69,0.12)',
        tension: 0.35,
        fill: true,
      },
    ],
  }), []);

  const barData = useMemo(() => ({
    labels: zones,
    datasets: [
      {
        label: 'Complaints Raised',
        data: complaintsByZone,
        backgroundColor: '#ffc107',
        borderRadius: 6,
      },
    ],
  }), []);

  const doughnutData = useMemo(() => ({
    labels: ['Safe', 'Moderate', 'Unsafe'],
    datasets: [
      {
        data: [63, 27, 10],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      },
    ],
  }), []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Water Quality Dashboard</h1>
        <p style={styles.subtitle}>Live overview of readings, complaints and overall water quality status</p>

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statValue}>7.1</div>
            <div style={styles.statLabel}>Avg. pH (7 days)</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statValue}>3.5 NTU</div>
            <div style={styles.statLabel}>Avg. Turbidity</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statValue}>61</div>
            <div style={styles.statLabel}>Total Complaints</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statValue}>63%</div>
            <div style={styles.statLabel}>Zones Rated "Safe"</div>
          </div>
        </div>

        <div style={styles.chartsGrid}>
          <div style={styles.chartCard}>
            <div style={styles.chartTitle}>Weekly pH & Turbidity Trend</div>
            <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          </div>
          <div style={styles.chartCard}>
            <div style={styles.chartTitle}>Complaints by Zone</div>
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </div>
          <div style={styles.chartCard}>
            <div style={styles.chartTitle}>Overall Water Quality Distribution</div>
            <Doughnut data={doughnutData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
