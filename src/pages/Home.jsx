import { Link } from "@mui/material";
import Header from "../components/Header";
import styles from "../styles/home.module.css"

const Home = () => {
  return (
    <>
      <Header title="Welcome to" />
      <div className={styles.container}>
        <h2>The Country Catalog</h2>
        <div className={styles.resume}>
          <p>This site uses informations from an open source Rest API called <Link href="https://restcountries.com/#rest-countries">RestCountries</Link>, </p>
          <p>which allows you to retrieve the main informations such as flags, capitals, currency used... of the countries of the world in order to be able to locate them on a world map.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
