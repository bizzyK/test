
# Technical Assessment: Employee Application

We have a very simple Employee Application with the following existing functionality:

- **Backend**: An endpoint to retrieve a list of employees from the database.
- **Frontend**: A web form that is already connected to the backend, allowing it to call the “add” endpoint (currently not implemented).

Unfortunately, some functionality is missing, and your task will be to implement it.

---

## Assessment Scope

Your task will be to achieve the following:

1. **Implement the “Add” Endpoint**: Create functionality to add an employee to the PostgreSQL database.
2. **Display Employees in the UI**: Update the frontend to display employees that have been saved to the database.

---

## Tech Stack

- **Frontend**: React/NextJS
- **Backend**: Node.js (API layer) connected to a PostgreSQL database
- **Testing Tools**: Jest

---

## Guidelines

- There is **no hidden complexity** or “curve balls.”
- You are **not expected to complete everything** within the allotted time (1 hour).
- Feel free to discuss your approach, outline your thought process, or use pseudo code before diving into implementation.
- Collaboration is key—don’t hesitate to ask questions or clarify requirements.

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

2. **Build and start the containers**:
   Run the following command to set up the backend, frontend, and PostgreSQL database:
   ```bash
   docker-compose up --build
   ```

3. **Access the application**:
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Backend**: [http://localhost:4000](http://localhost:4000)
   - **Database**: Connect to PostgreSQL at `localhost:5432` with:
      - Username: `user`
      - Password: `password`
      - Database: `employee_db`

### Debugging
- Use `docker-compose logs` to check the logs for each service if something isn’t working.
- To stop the containers, press `Ctrl+C` or run:
   ```bash
   docker-compose down
   ```

---

Let me know if you need any help or encounter any issues! 🚀
