import axios from 'axios';

const api = axios.create({
  baseURL: "https://edumaster-3sjq.onrender.com/api",
  headers: { "Content-Type": "application/json" }
});


export default api;
