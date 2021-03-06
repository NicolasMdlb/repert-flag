import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountry } from "../../api/HandlerClient";
import Header from "../../components/Header";
import Description from './../../components/Country/Description';
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../../styles/Country/countryView.module.css";
import CountryMapView from './../../components/Country/CountryMapView';


const CountryView = () => {
  const { name } = useParams();
  const [countryFull, setCountryFull] = useState(null);

  useEffect(() => {
    const getCountryData = async () => {
      let country = await getCountry(name);
      setCountryFull(country);
    };

    getCountryData();
  }, [name]);

  return (
    <>
      {countryFull === null ? (
        <>
          <div className={styles.circleProgress}>
            <CircularProgress color="inherit" />
          </div>
        </>
      ) : (
        <>
          <Header imgWidth="3em" imgHeight="2em" img={countryFull.flag} title={name} />
          <div className={styles.container}>
            <CountryMapView {...countryFull} />
            <Description {...countryFull} />
          </div>
        </>
      )}
    </>
  );
};

export default CountryView;
