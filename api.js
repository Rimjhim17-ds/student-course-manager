// Connectivity layer: every request to the JSON Server goes through here.
const BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

async function request(path, options = {}) {
  const res = await fetch(BASE + path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error(`Request failed (${res.status}). Is the API server running on ${BASE}?`);
  return res.json();
}

export const api = {
  list: (resource) => request(`/${resource}`),                       // GET    /students
  get: (resource, id) => request(`/${resource}/${id}`),              // GET    /students/1
  create: (resource, data) =>                                        // POST   /students
    request(`/${resource}`, { method: "POST", body: JSON.stringify(data) }),
  update: (resource, id, data) =>                                    // PUT    /students/1
    request(`/${resource}/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  remove: (resource, id) =>                                          // DELETE /students/1
    request(`/${resource}/${id}`, { method: "DELETE" }),
};
