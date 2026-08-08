# Water Quality Monitoring System

A full-stack web application for reporting water quality issues, tracking complaints, and monitoring water quality in real time.

**Developed by:** Dipak Rathod
**College:** PREC (Pravara Rural Engineering College)

## Features

- **Dashboard** – Visual analytics with charts for pH, turbidity, and complaint trends
- **Raise Complaint** – Submit and track water quality complaints by zone
- **Water Quality Self-Test** – Check if water is Safe / Moderate / Unsafe based on pH, TDS, turbidity, and temperature
- **Stay Aware** – Educational content about water quality and pollution
- **Alerts & Notifications** – Zone-wise water advisory feed
- **Feedback** – Star-rating feedback form for users
- **FAQ** – Common questions answered
- **Admin Panel** – Login-protected panel for managing users and complaints
- **About** – Project and developer information

## Tech Stack

- **Frontend:** React, React Router, Chart.js, Axios
- **Backend:** Spring Boot (Java), Spring Data JPA
- **Database:** MySQL

## Project Structure

```
Water-Quality-Monitoring/
├── src/                  # React frontend source
│   ├── pages/            # All page components
│   ├── App.js            # Routes
│   ├── Navbar.js          # Navigation bar
│   └── api.js             # API calls to backend
├── public/                # Static assets and images
├── backend/                # Spring Boot backend
│   └── src/main/java/com/example/backend/
│       ├── entity/         # Database models
│       ├── repository/     # JPA repositories
│       ├── service/        # Business logic
│       └── controller/     # REST API endpoints
└── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- Java JDK 17+
- MySQL Server (v8+)

### 1. Database Setup
```sql
CREATE DATABASE wqm;
```

### 2. Backend Setup
Open `backend/src/main/resources/application.properties` and update your MySQL credentials:
```properties
spring.datasource.username=root
spring.datasource.password=your_password
```

Then run the backend:
```bash
cd backend
./mvnw spring-boot:run      # Mac/Linux
mvnw.cmd spring-boot:run    # Windows
```
Backend runs on **http://localhost:8081**

### 3. Frontend Setup
```bash
npm install
npm start
```
Frontend runs on **http://localhost:3000**

## Notes

- The backend uses `spring.jpa.hibernate.ddl-auto=update`, so database tables are created automatically on first run.
- If port 3000 or 8081 is already in use, the app will prompt to use a different port, or you can change `server.port` in `application.properties`.

## License

This project is for educational purposes as part of a final year academic project.

##Author **Dipak Rathod**
