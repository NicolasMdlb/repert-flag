import ImageFlag from "./imageFlag";
import styles from "../../styles/Card/countryCard.module.css";
import { NavLink } from "react-router-dom";

const CountryCard = (props) => {
  return (
    <NavLink to={props.name}>
      <div className={styles.countryCard}>
        {props.all && (
          <div className={styles.continent}>
            <strong>{props.region}</strong>
          </div>
        )}
        <div className={styles.flagInfos}>
          <ImageFlag img={props.flag} name={props.name} />
          <div className={styles.infos}>
            <p>
              <strong>Name : </strong>
            </p>
            <p>{props.name}</p>
            {props.capitals !== undefined &&
              <>
                <p>
                  <strong>Capitale(s) : </strong>
                </p>
                <p>
                  {props.capitals.join(", ")}
                </p>
              </>
            }
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default CountryCard;
