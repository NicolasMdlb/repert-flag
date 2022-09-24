import ApiCountries from "./ClientCountries";
import Country from "../class/Country";
import CountryFull from './../class/CountryFull';

export async function getCountries() {
  if (!sessionStorage.getItem('Countries')) {
    let response = await ApiCountries.get("/all");
    sessionStorage.setItem('Countries', JSON.stringify(transformToCountries(response.data)))
  }

  return JSON.parse(sessionStorage.getItem('Countries'));
}

export async function getRegions(region) {
  if (!sessionStorage.getItem(region)) {
    let response = await ApiCountries.get(`/region/${region}`);
    sessionStorage.setItem(region, JSON.stringify(transformToCountries(response.data)))
  }

  return JSON.parse(sessionStorage.getItem(region));
}

export async function getCountry(name) {
  if (!sessionStorage.getItem(name)) {
    let response = await ApiCountries.get(`/name/${name}?fullText=true`);
    sessionStorage.setItem(name, JSON.stringify(new CountryFull(response.data[0])))
  }

  return JSON.parse(sessionStorage.getItem(name));
}

const transformToCountries = (data) => {
  return data.map((c) => {
    return new Country(c);
  }).sort((ca, cb) => ca.name.localeCompare(cb.name));
}