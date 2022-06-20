import { useState, useEffect } from "react";
import { getCountries, getRegion } from "../api/HandlerClient";
import styles from "../styles/countryManager.module.css";
import Header from "./../components/Header";
import CircularProgress from "@mui/material/CircularProgress";
import CountryCard from "../components/Card/CountryCard";
import NavCountry from "../components/NavCountry";
import Pagination from "@mui/material/Pagination";

const CountryManager = () => {
  const [pages, setPages] = useState(0);
  const [all, setAll] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(()=> {

  }, [page])

  const [continents, setContinents] = useState(null);
  const [showCountries, setShowCountries] = useState(null);

  const [countries, setCountries] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      let listCountry = await getCountries();
      setPages(listCountry.length / 10);
      setCountries(listCountry);
      setShowCountries(listCountry.slice(0, 10));
    };

    if (countries === null) {
      fetchCountries();
    }
  }, [countries, page]);

  if (continents === null && countries != null) {
    let regions = ["Tous"];

    regions.push(
      countries
        .map((c) => c.region)
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort((ca, cb) => ca.localeCompare(cb))
    );

    // Flat permet d'enlever un sous tableau
    setContinents(regions.flat());
  }

  const handlePage = (event, value) => {
    setPage(value);
    setShowCountries(countries.slice(0 + 10 * (value - 1), 10 * value));
  };

  const regionHandler = async (region) => {
    let listCountryRegion =
      region !== null ? await getRegion(region) : await getCountries();

    setAll(region === null)
    setPage(1);
    setCountries(listCountryRegion);
    setPages(listCountryRegion.length / 10);
    setShowCountries(listCountryRegion.slice(0, 10));
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
            <div>Nombre de pays : {countries.length}</div>
          </div>
          <div className={styles.cards}>
            {showCountries.map((c, index) => {
              return <CountryCard key={index} all={all} {...c} />;
            })}
          </div>
          <div className={styles.paginate}>
            <Pagination
              count={Math.ceil(pages)}
              page={page}
              onChange={handlePage}
              size="large"
              variant="outlined"
              color="secondary"
            />
          </div>
        </>
      )}
    </>
  );
};

export default CountryManager;
