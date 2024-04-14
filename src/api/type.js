import axios from 'axios'

const tasksApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const getAllTasks = () => tasksApi.get("/");

export const createTask = (task) => tasksApi.post("/", task);
