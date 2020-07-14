import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-optimizer-server.herokuapp.com/api",
});
api.defaults.headers.post["Content-Type"] = "application/json";
export default api;
