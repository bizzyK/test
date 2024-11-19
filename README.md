
# Technical Assessment: Employee Application

We have a very simple Employee Application with the following existing functionality:

- **Backend**: An API route (`/api/employees`) that interacts with a PostgreSQL database.
- **Frontend**: A React-based form that allows users to add employees and display a list of employees.

Unfortunately, some functionality is missing, and your task will be to implement it.

---

## Assessment Scope

Your task will be to achieve the following:

1. **Implement the API Route**: Complete the `/api/employees` endpoint to handle adding employees to the PostgreSQL database and retrieving the employee list.
2. **Display Employees in the UI**: Update the frontend to display employees fetched from the database.

---

## Tech Stack

- **Frontend**: React/Next.js
- **Backend**: Node.js (API routes within Next.js)
- **Database**: PostgreSQL
- **Testing Tools**: Jest

---

## Project Structure

The project follows a unified structure where the backend and frontend coexist within a single Next.js application:

```
project-root/
├── src/
│   ├── pages/
│   │   ├── api/
│   │   │   ├── employees.js      # Backend API route for employees
│   │   ├── index.js             # Frontend entry point
│   ├── components/
│   │   ├── EmployeeForm.js      # Form to add employees
│   │   ├── EmployeeList.js      # List of employees
│   ├── lib/
│   │   ├── db.js                # Database connection helper
│   ├── styles/
│   │   ├── globals.css          # Global styles
├── public/                      # Static assets
├── .env.local                   # Environment variables
├── Dockerfile                   # Docker configuration for the application
├── docker-compose.yml           # Docker Compose file for the app and PostgreSQL
├── package.json                 # Dependencies and scripts
```

---

## Setup Instructions

### Prerequisites

Ensure the following are installed on your machine:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Steps to Run the Application

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bizzyK/test.git
   cd test
   ```

2. **Set up environment variables**:
   Create a `.env.local` file in the root directory with the following content:
   ```env
   PG_USER=user
   PG_PASSWORD=password
   PG_HOST=db
   PG_DATABASE=employee_db
   PG_PORT=5432
   ```

3. **Build and start the containers**:
   Run the following command to set up the application and PostgreSQL database:
   ```bash
   docker-compose up --build
   ```

4. **Access the application**:
    - **Frontend and API**: [http://localhost:3000](http://localhost:3000)
    - **Database**: Connect to PostgreSQL at `localhost:5432` with the credentials in `.env.local`.

5. **Stop the application**:
   To stop the containers, press `Ctrl+C` or run:
   ```bash
   docker-compose down
   ```

---

## Debugging

- **Docker Logs**:
  Use `docker-compose logs` to view logs for all services. To view logs for a specific service:
  ```bash
  docker-compose logs app
  docker-compose logs db
  ```

- **Rebuild Without Cache**:
  If you encounter issues, rebuild the containers without using the cache:
  ```bash
  docker-compose build --no-cache
  ```

---

## Guidelines

- There is **no hidden complexity** or “curve balls.”
- You are **not expected to complete everything** within the allotted time (1 hour).
- Feel free to discuss your approach, outline your thought process, or use pseudo code before diving into implementation.
- Collaboration is key—don’t hesitate to ask questions or clarify requirements.

---

Let me know if you encounter any issues or need further assistance! 🚀
