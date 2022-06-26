import styles from "../../styles/Country/description.module.css";

const Description = (props) => {
  return (
    <>
      <div className={styles.description}>
        <h2 className={styles.region}>{props.region}</h2>
        <div className={styles.subDescription}>
          <div>
            <div className={styles.title}>
              <p><strong>Official name : </strong></p>
              <p>{props.official}</p>
            </div>
            <div className={styles.title}>
              <p><strong>Capital(s) : </strong></p>
              <p>{props.capitals !== undefined ? props.capitals.join(", ") : "No capital"}</p>
            </div>
            <div className={styles.title}>
              <p><strong>Population : </strong></p>
              <div className={styles.subTitle}>
                {props.demonyms !== undefined &&
                  <div>
                    <p>Name : </p>
                    <p>{props.demonyms}</p>
                  </div>
                }
                <div>
                  <p>Total : </p>
                  <p>{props.population} inhabitant{parseInt(props.population) > 1 ? "s" : ""}</p>
                </div>
              </div>
            </div>
            <div className={styles.title}>
              <p><strong>Area: </strong></p>
              <p>{props.area} Km²</p>
            </div>
            <div className={styles.title}>
              <p><strong>Subregion: </strong></p>
              <p>{props.continent}</p>
            </div>
          </div>
          {props.coatOfArms &&
            <div className={styles.coatOfArms}>
              <img src={props.coatOfArms} alt="coatsOfArms"></img>
            </div>
          }
        </div>
        {props.languages !== undefined &&
          <div className={styles.title}>
            <p><strong>Language(s) : </strong></p>
            <p>{props.languages.join(", ")}</p>
          </div>
        }
        {props.currencies !== undefined &&
          <div className={styles.title}>
            <p><strong>Currencie(s) : </strong></p>
            <div className={styles.currency}>
              <p><span>Name :</span><span>Symbol :</span></p>
              {props.currencies.map((money, key) => {
                return <p key={key}><span>{money.name}</span><span>{money.symbol}</span></p>
              })}
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Description;
