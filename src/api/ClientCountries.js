import axios from "axios";

const ApiCountries = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
  },
});

export default ApiCountries;
