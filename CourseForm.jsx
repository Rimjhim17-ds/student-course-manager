import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../api.js";

export default function CourseForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", duration: "", instructor: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (id) {
      api.get("courses", id)
        .then(({ title, duration, instructor }) => setForm({ title, duration, instructor }))
        .catch((e) => setApiError(e.message));
    }
  }, [id]);

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Enter the course title.";
    if (!form.duration.trim()) e.duration = "Enter the duration, like 8 weeks.";
    if (!form.instructor.trim()) e.instructor = "Enter the instructor's name.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    try {
      if (id) await api.update("courses", id, form);
      else await api.create("courses", form);
      navigate("/courses");
    } catch (e) {
      setApiError(e.message);
    }
  };

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const field = (name, label) => (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>{label}</label>
      <input id={name} className={`form-control ${errors[name] ? "is-invalid" : ""}`} value={form[name]} onChange={set(name)} />
      <div className="invalid-feedback">{errors[name]}</div>
    </div>
  );

  return (
    <div className="panel" style={{ maxWidth: 560 }}>
      <h1 className="h4 mb-3">{id ? "Edit course" : "Add course"}</h1>
      {apiError && <div className="alert alert-danger">{apiError}</div>}
      <form onSubmit={handleSubmit} noValidate>
        {field("title", "Course title")}
        {field("duration", "Duration")}
        {field("instructor", "Instructor")}
        <button className="btn btn-brand me-2" type="submit">{id ? "Save changes" : "Add course"}</button>
        <Link to="/courses" className="btn btn-outline-secondary">Cancel</Link>
      </form>
    </div>
  );
}
