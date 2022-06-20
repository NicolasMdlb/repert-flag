import ApiCountries from "./ClientCountries";
import Country from "../class/Country";

export async function getCountries() {
  let response = await ApiCountries.get("/all"); 

  return transformToCountries(response.data);
}

export async function getRegion(region) {
  let response = await ApiCountries.get("/region/" + region);

  return transformToCountries(response.data);
}

const transformToCountries = (data) => {
  return data.map((c) => {
    let capital = c.capital !== undefined ? c.capital[0] : "Aucune capitale";
    return new Country(
      c.name.common,
      c.translations.fra.common,
      capital,
      c.region,
      c.flags.png
    );
  }).sort((ca, cb) => ca.nameFr.localeCompare(cb.nameFr));
}