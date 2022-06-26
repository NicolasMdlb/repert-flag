import ApiCountries from "./ClientCountries";
import Country from "../class/Country";
import CountryFull from './../class/CountryFull';

export async function getCountries() {
  let response = await ApiCountries.get("/all"); 

  return transformToCountries(response.data);
}

export async function getRegions(region) {
  let response = await ApiCountries.get(`/region/${region}`);

  return transformToCountries(response.data);
}

export async function getCountry(name) {
  let response = await ApiCountries.get(`/name/${name}?fullText=true`);

  return new CountryFull(response.data[0]);
}

const transformToCountries = (data) => {
  return data.map((c) => {
    return new Country(
      c.name.common,
      c.capital,
      c.region,
      c.flags.png
    );
  }).sort((ca, cb) => ca.name.localeCompare(cb.name));
}