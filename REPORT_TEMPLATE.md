# Student Course Manager: Project Report

## 1. Student and Project Details
| Field | Value |
|---|---|
| Student Name | [Enter full name] |
| Student ID / Register Number | [Enter ID] |
| Project Title | Student Course Manager |
| Course / Lab / Batch | [Enter details] |
| Submission Date | [DD-MM-YYYY] |

## 2. Problem Statement and Proposed Solution

### Problem statement
Training coordinators often track student enrolments in spreadsheets or on paper. Records become inconsistent, duplicates appear, and it is hard to see how many students are in each course. A small web application gives them one place to add, find, correct, and remove records.

### Proposed solution
A React single-page application lets a coordinator manage **students** and **courses**, and assign each student to a course. A dashboard shows totals and students per course. The application validates input before saving and shows clear error messages.

- **Objective and scope:** CRUD management of two entities with a one-to-many relationship.
- **Target users:** Training coordinators and lab administrators.
- **Main modules:** Dashboard, Students, Courses.
- **Expected result / verification:** Each operation was tested manually (see Section 9) and checked against `db.json`.
- **Assumptions and limitations:** Mock data only; no login; the course-delete rule is enforced in the frontend.

## 3. Webpage Design and Frontend Implementation
| Technology | How it was used in this project |
|---|---|
| HTML (JSX) | Defines forms, tables, buttons, and the navigation bar in each component. |
| CSS | `src/index.css` sets the colour palette, panels, and the mobile layout adjustments. |
| JavaScript | Handles form validation (required fields, email pattern), the search filter, and async API calls. |
| React | Reusable components (`StudentList`, `StudentForm`, `CourseList`, `CourseForm`, `Dashboard`) using state (`useState`), effects (`useEffect`), props, and routing with React Router. |
| Bootstrap | Grid, responsive tables, form controls, alerts, and buttons. Custom CSS adds the brand colour and panel styling. |
| JSON Server | Provides mock REST endpoints from `db.json`. |

**Key pages:** Dashboard (`/`), student list (`/students`), add/edit student (`/students/new`, `/students/:id/edit`), course list (`/courses`), add/edit course.
**Validation and errors:** Inline messages under each field; an alert appears if the API cannot be reached or a course with enrolled students is deleted.

## 4. Entities, Tables, and CRUD Operations
| Entity | Fields | Create | Read / List | Update | Delete |
|---|---|---|---|---|---|
| Course | id, title, duration, instructor | Add course form | Course list | Edit course form | Delete (blocked if students are enrolled) |
| Student | id, name, email, courseId | Add student form | Student list with search | Edit student form | Delete with confirmation |

**Relationship:** `students.courseId` references `courses.id` (one course to many students).

```
COURSE (id PK, title, duration, instructor)
   | 1
   | has
   | many
STUDENT (id PK, name, email, courseId FK)
```

## 5. Frontend, Backend, Database, and Connectivity
| Layer | Implementation |
|---|---|
| Frontend | React components and Bootstrap forms in `src/components`. |
| Connectivity / API layer | `src/api.js` uses `fetch` with GET, POST, PUT, and DELETE against `http://localhost:3001`. Responses update component state, which re-renders the UI. |
| Backend | JSON Server (mock REST API). No Spring Boot backend was used. |
| Data storage | `db.json` file with `students` and `courses` collections (mock data, not a relational database). |
| Tools used | VS Code, Node.js/npm, Git/GitHub, browser developer tools. [Add Postman if you used it.] |

## 6. JSON Server Details
- **Data file:** `db.json` with `courses` and `students`.
- **Start command:** `npm run server` (runs `json-server --watch db.json --port 3001`).
- **Base URL:** http://localhost:3001
- **Endpoints:** GET `/students`, POST `/students`, PUT `/students/:id`, DELETE `/students/:id`, and the same for `/courses`.
- **Frontend flow:** The React component calls the `api` helper, awaits the response, then updates state or navigates to the list page.
- **Limitation:** This is mock/local data with no authentication, business rules, or production persistence.

## 7. Screenshots: Step-by-Step Evidence
Save images in `docs/screenshots/` and insert them below.

**Screenshot 1: Project setup.** VS Code Explorer showing `src/components`, `db.json`, and `package.json`.
[Insert screenshot]

**Screenshot 2: Home page.** Dashboard with counts and the navigation bar.
[Insert screenshot]

**Screenshot 3: Create.** The Add student form, then the list showing the new record.
[Insert screenshot]

**Screenshot 4: Read / List.** Students table with the search box in use.
[Insert screenshot]

**Screenshot 5: Update.** Edit student form and the updated row.
[Insert screenshot]

**Screenshot 6: Delete.** The confirmation prompt and the list after deletion.
[Insert screenshot]

**Screenshot 7: API evidence.** Browser at http://localhost:3001/students showing JSON (or the Network tab).
[Insert screenshot]

**Screenshot 8: Database evidence.** `db.json` open in VS Code after changes.
[Insert screenshot]

## 8. Source Code
GitHub repository: [paste link here]. See `README.md` for setup and run instructions.

## 9. Testing and Results
| Test case | Steps / input | Expected result | Actual result |
|---|---|---|---|
| Create a student | Fill name, email, course; click Add student | Record saved and visible in list | [Pass / Fail] |
| Update a student | Edit a name; click Save changes | Updated value shown in list | [Pass / Fail] |
| Delete a student | Click Delete; confirm | Record removed from list and `db.json` | [Pass / Fail] |
| Invalid input | Submit empty form or bad email | Validation messages appear | [Pass / Fail] |
| Create / edit a course | Add a course, then edit it | Course appears and updates | [Pass / Fail] |
| Delete course with students | Delete a course that has students | Error message; course is kept | [Pass / Fail] |
| API offline | Stop JSON Server and reload | Error alert is shown | [Pass / Fail] |

## 10. Final Checklist
- [ ] Name and ID included
- [ ] Problem, objectives, solution explained
- [ ] Technologies explained
- [ ] Entities and fields listed
- [ ] CRUD described for each entity
- [ ] Connectivity explained
- [ ] Numbered, captioned screenshots
- [ ] GitHub link or ZIP included
- [ ] Setup instructions and test results included
- [ ] No passwords, secrets, or personal data exposed
