import axios from "axios";

export default class LoginService {
  static login = async (email, password) => {
    return axios.post("https://reqres.in/api/login", { email, password });
  };
}
