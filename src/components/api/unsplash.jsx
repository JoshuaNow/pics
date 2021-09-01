import axios from "axios";
import secret from "../SecretFile";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: secret,
  },
});
