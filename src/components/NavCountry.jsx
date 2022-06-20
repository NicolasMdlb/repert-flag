import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const NavCountry = (props) => {
  const [alignment, setAlignment] = useState("Tous");

  const handleChange = (event) => {
    setAlignment(event.target.value);
    props.changeRegion(event.target.value === "Tous" ? null : event.target.value)
  };

  return (
    <>
      <ToggleButtonGroup
        variant="outlined" 
        value={alignment}
        color="secondary"
        exclusive
        onChange={handleChange}
      >
        {props.continents.map((c) => {
          return (
            <ToggleButton
              key={c}
              value={c}
            >
              {c}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </>
  );
};

export default NavCountry;
