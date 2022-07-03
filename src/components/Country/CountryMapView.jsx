import { useEffect, useState } from "react";
import { MapContainer, TileLayer, FeatureGroup, Circle, Popup, Marker } from "react-leaflet";
import ImageFlag from "./../Card/imageFlag";
import styles from "../../styles/Country/countryMapView.module.css"
import "leaflet/dist/leaflet.css";

const CountryMapView = (props) => {
  const purpleOptions = { color: 'purple' }
  const [property, setProperty] = useState(null);
  const [geoCap, setgeoCap] = useState(null)

  useEffect(() => {
    // charge icon
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });

    const defineProperty = () => {
      if (props.capitals !== undefined) {
        setProperty(props.capitals.join(", "));
        setgeoCap(props.geoCap);
      }
    }

    defineProperty();
  })

  return (
    <div>
      <MapContainer center={props.geoLoc} zoom={props.capitals === undefined ? 1 : 5} scrollWheelZoom={true} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
        {geoCap !== null && (
          <>
            <FeatureGroup pathOptions={purpleOptions}>
              <Popup>
                {property}
              </Popup>
              <Circle center={geoCap} radius={3000} />
            </FeatureGroup>
          </>
        )}
        <>
          <Marker position={props.geoLoc} >
            <Popup>
              <div className={styles.popupMap}>
                <p><strong>Country</strong></p>
                <p>{props.name}</p>
                <div>
                  <p><strong>Coat of Arms</strong></p>
                  <ImageFlag imgWidth="5em" imgHeight="7em" name="Coast Of Arms" img={props.coatOfArms} />
                </div>
              </div>
            </Popup>
          </Marker>
        </>
      </MapContainer>
    </div>
  );
};

export default CountryMapView;