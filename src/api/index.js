import axios from "axios";

const mainURL = axios.create({
  baseURL: "https://teknikinnavatsion-server.vercel.app/api",
  // baseURL: "http://localhost:8000/api",
});

export default mainURL;
