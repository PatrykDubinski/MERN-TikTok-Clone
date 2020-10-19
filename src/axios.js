import axios from "axios";

const instance = axios.create({
  baseURL: "https://mytinderbackend.herokuapp.com/",
});

export default instance;
