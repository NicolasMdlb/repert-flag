import ApiCountries from "./ClientCountries";
import Country from "../class/Country";
import CountryFull from './../class/CountryFull';

export async function getCountries() {
  if (!localStorage.getItem('Countries')) {
    let response = await ApiCountries.get("/all");
    localStorage.setItem('toto', 'Je suis Toto et je fais plop')
    localStorage.setItem('Countries', JSON.stringify(transformToCountries(response.data)))
  }

  return JSON.parse(localStorage.getItem('Countries'));
}

export async function getRegions(region) {
  if (!localStorage.getItem(region)) {
    let response = await ApiCountries.get(`/region/${region}`);
    localStorage.setItem(region, JSON.stringify(transformToCountries(response.data)))
  }

  return JSON.parse(localStorage.getItem(region));
}

export async function getCountry(name) {
  if (!localStorage.getItem(name)) {
    let response = await ApiCountries.get(`/name/${name}?fullText=true`);
    localStorage.setItem(name, JSON.stringify(new CountryFull(response.data[0])))
  }

  return JSON.parse(localStorage.getItem(name));
}

const transformToCountries = (data) => {
  return data.map((c) => {
    return new Country(c);
  }).sort((ca, cb) => ca.name.localeCompare(cb.name));
}