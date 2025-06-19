import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Make sure token is saved
  if (token) {
    console.log("Using token:", token); // Log the token for debugging
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
