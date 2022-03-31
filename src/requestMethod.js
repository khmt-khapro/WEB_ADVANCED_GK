import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2ViYzcxZTFmNDIyODQ3MThhMWQ3ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODYwNjg5MiwiZXhwIjoxNjQ4ODY2MDkyfQ.fGZSXVKGuBzx8IoMkrR1xiUrMfZ0791tzkcJ6UMLgfo";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `bearer ${TOKEN}` },
});
