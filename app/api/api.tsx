import axios from "axios";

const SpringAPI = axios.create({
  baseURL: "http://localhost:8080/", // Spring Boot backend
});

export default SpringAPI;
