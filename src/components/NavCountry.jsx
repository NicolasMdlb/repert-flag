import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";

const NavCountry = (props) => {
  const [alignment, setAlignment] = useState("All");
  const isMobile = useMediaQuery('(max-width:550px)');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setAlignment(value);
    props.changeRegion(
      value === "All" ? null : value
    );

  };

  return (
    <div>
      {isMobile ? (
        <>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="SelectRegionLabel">Select a continent</InputLabel>
            <Select
              labelId="selectRegionLabel"
              id="RegionsName"
              value={alignment}
              onChange={handleChange}
              input={<OutlinedInput label="Select a continent" />}
            >
              {props.continents.map((c) => {
                return (
                  <MenuItem key={c} value={c}>{c}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </>
      ) : (
        <>
          <ToggleButtonGroup
            size="small"
            variant="outlined"
            value={alignment}
            color="secondary"
            exclusive
            onChange={handleChange}
          >
            {props.continents.map((c) => {
              return (
                <ToggleButton key={c} value={c}>
                  {c}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </>
      )}
    </div>
  );
};

export default NavCountry;
