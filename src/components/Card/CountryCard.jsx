import ImageFlag from "./imageFlag";
import styles from "../../styles/Card/countryCard.module.css";
import { NavLink } from "react-router-dom";

const CountryCard = (props) => {
  return (
    <NavLink to={props.name}>
      <div className={styles.countryCard}>
        <div className={styles.country}>
          <strong>{props.name}</strong>
        </div>
        <div className={styles.flagInfos}>
          <ImageFlag img={props.flag} name={props.name} />
          <div className={styles.infos}>
            <p>
              <strong>Capitale(s) : </strong>
            </p>
            <p>
              {props.capitals !== undefined ? props.capitals.join(", ") : "No capital"}
            </p>
            {props.all && (
              <>
                <p>
                  <strong>Continent : </strong>
                </p>
                <p>{props.region}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CountryCard;
