// Navbar.js
import { Link, NavLink } from "react-router-dom";

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    flexWrap: "wrap",
    rowGap: "10px",
  },
  siteTitle: {
    fontSize: "30px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#fff",
  },
  linkList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
  },
  listItem: {
    marginLeft: "16px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold",
    transition: "color 0.3s ease",
    whiteSpace: "nowrap",
  },
  activeLink: {
    color: "#ffc107",
  },
};

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.siteTitle}>
        WQM
      </Link>
      <ul style={styles.linkList}>
        <li style={styles.listItem}>
          <NavLink to="/dashboard" style={styles.link} activeStyle={styles.activeLink}>
            Dashboard
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/Complaint" style={styles.link} activeStyle={styles.activeLink}>
            Raise Complaint
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/water-test" style={styles.link} activeStyle={styles.activeLink}>
            Water Test
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/StayAware" style={styles.link} activeStyle={styles.activeLink}>
            Stay Aware
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/notifications" style={styles.link} activeStyle={styles.activeLink}>
            Alerts
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/feedback" style={styles.link} activeStyle={styles.activeLink}>
            Feedback
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/faq" style={styles.link} activeStyle={styles.activeLink}>
            FAQ
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/About" style={styles.link} activeStyle={styles.activeLink}>
            About
          </NavLink>
        </li>
        <li style={styles.listItem}>
          <NavLink to="/Login" style={styles.link} activeStyle={styles.activeLink}>
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
