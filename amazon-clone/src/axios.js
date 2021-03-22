import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/amzn-202007/us-central1/api",
});

export default instance;

//http://localhost:5001/amzn-202007/us-central1/api
// THE API (cloud function) URL
