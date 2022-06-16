import ImageFlag from "./imageFlag";
import styles from "../../styles/Card/countryCard.module.css";

const CountryCard = (props) => {
  return (
    <div className={styles.countryCard}>
      <ImageFlag img={props.flag} name={props.name} />
      <div className={styles.infos}>
        <p><strong>Continent : </strong></p>
        <p>{props.region}</p>
        <p><strong>Pays : </strong></p>
        <p>{props.nameFr}</p>
        <p><strong>Capitale : </strong></p>
        <p>{props.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
