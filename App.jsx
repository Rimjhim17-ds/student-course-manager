import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import StudentList from "./components/StudentList.jsx";
import StudentForm from "./components/StudentForm.jsx";
import CourseList from "./components/CourseList.jsx";
import CourseForm from "./components/CourseForm.jsx";

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm app-nav navbar-dark">
        <div className="container">
          <span className="navbar-brand fw-semibold">Student Course Manager</span>
          <div className="navbar-nav flex-row gap-3">
            <NavLink className="nav-link" to="/" end>Dashboard</NavLink>
            <NavLink className="nav-link" to="/students">Students</NavLink>
            <NavLink className="nav-link" to="/courses">Courses</NavLink>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/new" element={<StudentForm />} />
          <Route path="/students/:id/edit" element={<StudentForm />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/courses/new" element={<CourseForm />} />
          <Route path="/courses/:id/edit" element={<CourseForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
