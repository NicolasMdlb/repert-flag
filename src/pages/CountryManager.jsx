import Header from "./../components/Header";
import { getCountries, getRegion } from "../api/HandlerClient";
import { useState, useEffect } from "react";
import CountryCard from "../components/Card/CountryCard";
import styles from "../styles/countryManager.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import NavCountry from "../components/NavCountry";

const CountryManager = () => {
  const [continents, setContinents] = useState(null);
  const [countries, setCountries] = useState(null);

  const fetchCountries = async () => {
    let listCountry = await getCountries();
    setCountries(listCountry);

    if (continents === null) {
      let regions = ["Tous"];

      regions.push(
        listCountry
          .map((c) => c.region)
          .filter((v, i, a) => a.indexOf(v) === i)
          .sort((ca, cb) => ca.localeCompare(cb))
      );

      // Flat permet d'enlever un sous tableau
      setContinents(regions.flat());
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const regionHandler = async (region) => {
    let listCountryRegion = region !== null ? await getRegion(region) : await getCountries();

    setCountries(listCountryRegion);
  };

  return (
    <>
      <Header>Liste des pays du monde</Header>
      {countries === null ? (
        <div className={styles.circleProgress}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <>
          <div className={styles.navCountry}>
            <NavCountry continents={continents} changeRegion={regionHandler} />
          </div>
          <div className={styles.cards}>
            {countries.map((c) => {
              return <CountryCard key={c.name} {...c} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default CountryManager;
