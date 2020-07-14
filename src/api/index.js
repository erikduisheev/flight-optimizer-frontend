import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});
api.defaults.headers.post["Content-Type"] = "application/json";
export default api;
