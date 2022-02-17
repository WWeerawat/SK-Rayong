import axios from "axios";
const instance = axios.create({
  baseURL: "https://sk-rayong-backend.herokuapp.com/api",
});
export default instance;
