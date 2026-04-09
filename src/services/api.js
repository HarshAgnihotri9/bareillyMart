import axios from "axios";

const API = axios.create({
  baseURL: "http://10.103.56.89:8008/api", // 🔥 replace with your IP
  timeout: 10000,
});

// 🔐 Login API
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export default API;