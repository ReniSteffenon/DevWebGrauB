import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const insertTask = (payload) => api.post(`/task`, payload);
export const getAllTasks = () => api.get(`/tasks`);
export const updateTaskById = (id, payload) => api.put(`/task/${id}`, payload);
export const deleteTaskById = (id) => api.delete(`/task/${id}`);
export const getTaskById = (id) => api.get(`/task/${id}`);

const apis = {
  insertTask,
  getAllTasks,
  updateTaskById,
  deleteTaskById,
  getTaskById,
};

export default apis;
