# Student Course Manager

A React web application for managing students and the courses they are enrolled in. Built as a lab project to demonstrate full CRUD operations, form validation, and frontend-to-API connectivity.

## Technologies
- **HTML / JSX**: page structure (forms, tables, navigation)
- **CSS + Bootstrap 5**: layout, responsive grid, forms, tables; custom styles in `src/index.css`
- **JavaScript (ES6)**: validation, event handling, async requests
- **React 18** with React Router: components, props, state, routing
- **JSON Server 0.17**: mock REST API backed by `db.json` (mock data, not a real database)
- **Vite**: development server and build tool

## Prerequisites
- Node.js 18 or newer (check with `node -v`)
- VS Code (or any editor) and Git

## Setup and run
```bash
npm install
npm run dev
```
This starts both servers:
- React app: http://localhost:5173
- JSON Server API: http://localhost:3001

To run them separately, use `npm run server` and `npm run client` in two terminals.

To point the frontend at a different API, create a `.env` file with `VITE_API_URL=http://localhost:3001`.

## API endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | /students, /courses | List records |
| GET | /students/:id | Read one record |
| POST | /students, /courses | Create |
| PUT | /students/:id, /courses/:id | Update |
| DELETE | /students/:id, /courses/:id | Delete |

## Data model
- **courses**: id, title, duration, instructor
- **students**: id, name, email, courseId (foreign key to courses.id; one course has many students)

## Known limitations
- Data is stored in `db.json` (mock data). There is no authentication, and JSON Server does not enforce business rules or relational integrity.
- The "cannot delete a course with enrolled students" rule is enforced in the React frontend only.
