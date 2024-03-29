import axios from "axios";

axios.defaults.baseURL = "https://api.khorshidhasht.com/api/";
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";

export const { get, post, delete: deleteService, put } = axios;
